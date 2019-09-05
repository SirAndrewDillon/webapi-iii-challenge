const express = require('express')
const router = express.Router()
const db_posts = require('./postDb')

const middlez = require('../middleware')

//Read It's what smart people do
router.get('/', async (req, res) => {
	try {
		const posts = await db_posts.get()
		posts.length > 0
			? res.status(200).json(posts)
			: res.status(400).json({ message: `Go find it yourself!` })
	} catch (err) {
		res
			.status(500)
			.json({ message: `What do you want for nothing? A rubber biscuit?` })
	}
})

router.get('/:id', middlez.validatePostId, async (req, res) => {
	try {
		//middleware validates the id
		//wait for db to send back post data, then pass it along to the client
		//Trying to do better on the comments.
		res.status(200).json(await db_posts.getById(req.params.id))
	} catch (err) {
		res
			.status(500)
			.json({ message: `Cool your jets! It obviously your fault.` })
	}
})

//Update. That is what put means
router.put('/:id', middlez.validatePostId, async (req, res) => {
	try {
		;(await db_posts.update(req.params.id, req.body))
			? res.status(200).json({ id: req.params.id, ...req.body })
			: res.status(404).json({
					message: `Where oh where are you tonight? Why did you leave me here all alone?`
				})
	} catch (err) {
		res.status(500).json({ error: `Error message from the Gods` })
	}
})

//Delete. Do I need to explain the functionality?
router.delete('/:id', middlez.validatePostId, async (req, res) => {
	try {
		;(await db_posts.remove(req.params.id))
			? res
					.status(200)
					.json({ message: `Congrats! You deleted the fake news.` })
			: res
					.status(404)
					.json({ message: `Does it really matter what it says here?` })
	} catch (err) {
		res.status(500).json({
			error: `I didn't code the server wrong, you coded the frontend wrong!`
		})
	}
})

//Exports the router so other files can read it.
module.exports = router
