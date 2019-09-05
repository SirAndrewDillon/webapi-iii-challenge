const express = 'express'

const router = express.Router()
const db_users = require('./userDb')

const db_posts = require('../posts/postDb')

const requireLog = require('../middleware/requireLog')

//Create posts
router.post('/', requireLog.validateUser, async (req, res) => {
	try {
		const user = await db_users.insert(req.body)
		res.status(201).json(user)
	} catch (err) {
		res.status(500).json({ message: `Error!` })
	}
})

router.post(
	'/:id/posts',
	requireLog.validatepost,
	requireLog.validateuserid,
	async (req, res) => {
		try {
			let post = { ...req.body, user_id: req.params.id }
			post = await db_posts.insert(post)
			res.status(201).json(post)
		} catch (err) {
			res.status(500).json({ message: `Error: cannot POST` })
		}
	}
)

//Get info on users and posts
router.get('/', async (req, res) => {
	console.log('GET USERS')
	try {
		const users = await db_users.get()
		users.length > 0
			? res.status(200).json(users)
			: res.status(400).json({ message: `No humans found!` })
	} catch (err) {
		res
			.status(500)
			.json({ error: `Error: Server conflict looking for human survivors!` })
	}
})

router.get('/:id', requireLog.validateuserid, async (req, res) => {
	try {
		const user = await db_users.getById(req.params.id)
		user
			? res.status(200).json(user)
			: res.status(404).json({ message: `No users found!` })
	} catch (err) {
		res
			.status(500)
			.json({ error: `Error: Server conflict looking for humans!` })
	}
})

router.get('/:id/posts', requireLog.validateUserid, async (req, res) => {
	try {
		const posts = await db_users.getUserPosts(req.params.id)
		posts.length > 0
			? res.status(200).json(posts)
			: res.status(200).json({ message: `Invalid humans post!` })
	} catch (err) {
		res
			.status(500)
			.json({ error: `Error: Server conflict reading humans posts!` })
	}
})

router.delete(
	'/:id',
	requireLog.validateUser,
	requireLog.validateUserId,
	async (req, res) => {
		try {
			const posts = await db_users.getUserPosts(req.params.id)
			posts.length > 0
				? res.status(200).json(posts)
				: res.status(200).json({ message: `Invalid post!` })
		} catch (err) {
			res
				.status(500)
				.json({ error: `Error: Server conflict reading user posts!` })
		}
	}
)

router.put(
	'/:id',
	requireLog.validateuser,
	requireLog.validateuserid,
	async (req, res) => {
		try {
			;(await db_users.update(req.params.id, req.body))
				? res.status(200).json({ id: req.params.id, ...req.body })
				: res.status(404).json({ message: `No users found!` })
		} catch (err) {
			res.status(500).json({ error: `Error: Server conflict upadating user!` })
		}
	}
)

module.exports = router
