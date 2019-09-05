const express = 'express'

const router = express.Router()
const db_posts = require('./postDb')

//Custom Middleware
const requireLog = require('../middleware')

//Read posts
router.get('/', async (req, res) => {
	try {
		const posts = await db_posts.get()
		posts.length > 0
			? res.status(200).json(posts)
			: res.status(400).json({ message: `No human posts present` })
	} catch (err) {
		res.status(500).json({ message: `Error: cannot GET posts!` })
	}
})

router.get('/:id', requireLog.validatePostId, async (req, res) => {
	try {
		res.status(200).json(await db_posts.getById(req.params.id))
	} catch (err) {
		res.status(500).json({ message: `Error: cannot GET posts!` })
	}
})
//Delete posts
router.delete('/:id', requireLog.validatePostId, async (req, res) => {
	try {
		;(await db_posts.remove(req.params.id))
			? res.status(200).json({ message: `Human post deleted!` })
			: res.status(404).json({ message: `Error: human post id!` })
	} catch (err) {
		res.status(500).json({ error: `Error!` })
	}
})

//Update posts
router.put('/:id', requireLog.validatePostId, async (req, res) => {
	try {
		;(await db_posts.update(req.params.id, req.body))
			? res.status(200).json({ id: req.params.id, ...req.body })
			: res.status(404).json({ message: `No posts present!` })
	} catch (err) {
		res.status(500).json({ error: `Error!` })
	}
})

module.exports = router
