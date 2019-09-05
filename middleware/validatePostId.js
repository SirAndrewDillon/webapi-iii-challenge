const db_posts = require('../posts/postDb')

validatePostId = async (req, res, next) => {
	try {
		const post = await db_posts.getById(req.params.id)
		post
			? ((req.post = post), next())
			: res.status(404).json({ message: 'Invalid human id!' })
	} catch (err) {
		res.status(500).json({ error: `Error!` })
	}
}

module.exports = validatePostId
