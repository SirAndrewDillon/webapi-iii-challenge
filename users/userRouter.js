const express = require('express')
const router = express.Router()
const db_users = require('./userDb')
const db_posts = require('../posts/postDb')

const middlez = require('../middleware')

//Create
router.post('/', middlez.validateUser, async (req, res) => {
	try {
		const user = await db_users.insert(req.body)
		res.status(201).json(user)
	} catch (err) {
		res
			.status(500)
			.json({ message: `Server rejected you! You should be used to it loser.` })
	}
})

//validatePost does not require a db call, calling that 1st
router.post(
	'/:id/posts',
	middlez.validatePost,
	middlez.validateUserId,
	async (req, res) => {
		try {
			let post = { ...req.body, user_id: req.params.id }
			post = await db_posts.insert(post)
			res.status(201).json(post)
		} catch (err) {
			res
				.status(500)
				.json({ message: `The server is just too cool for you, sorry.` })
		}
	}
)

//Read
router.get('/', async (req, res) => {
	try {
		const users = await db_users.get()
		users.length > 0
			? res.status(200).json(users)
			: res
					.status(400)
					.json({ message: `No users found, did you check under the couch?` })
	} catch (err) {
		res.status(500).json({
			error: `The server you were looking for cannot be found. Please dial again`
		})
	}
})

router.get('/:id', middlez.validateUserId, async (req, res) => {
	try {
		const user = await db_users.getById(req.params.id)
		user
			? res.status(200).json(user)
			: res.status(404).json({
					message: `User not found, I never was good at finding Waldo.`
				})
	} catch (err) {
		res.status(500).json({ error: `Server died reduced to bits.` })
	}
})

router.get('/:id/posts', middlez.validateUserId, async (req, res) => {
	try {
		const posts = await db_users.getUserPosts(req.params.id)
		posts.length > 0
			? res.status(200).json(posts)
			: res.status(200).json({
					message: `Its all good even though the user died milking a cow..`
				})
	} catch (err) {
		res
			.status(500)
			.json({ error: `Server built by Windows what did you expect?` })
	}
})

//Update
router.put(
	'/:id',
	middlez.validateUser,
	middlez.validateUserId,
	async (req, res) => {
		try {
			;(await db_users.update(req.params.id, req.body))
				? res.status(200).json({ id: req.params.id, ...req.body })
				: res.status(404).json({
						message: `User went top jail! They did not pass go & did not collect 200 dollars`
					})
		} catch (err) {
			res.status(500).json({
				error: `server error: This server is a figment of your imagination`
			})
		}
	}
)

//Delete
router.delete('/:id', async (req, res) => {
	try {
		;(await db_users.remove(req.params.id))
			? res.status(200).json({ message: `User died milking a cow` })
			: res
					.status(404)
					.json({ message: `Were you trying to reach your imaginary friend?.` })
	} catch (err) {
		res
			.status(500)
			.json({ error: `The author of this server dropped the ball` })
	}
})

module.exports = router
