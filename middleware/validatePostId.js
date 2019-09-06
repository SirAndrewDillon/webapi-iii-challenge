const db_posts = require('../posts/postDb')

validatePostId = async (req, res, next) => {
	try {
		const post = await db_posts.getById(req.params.id)
		post
			? ((req.post = post), next())
			: res.status(404).json({ message: 'Gotta do better than that son!' })
	} catch (err) {
		res.status(500).json({ error: `Sorry but this error message is useless` })
	}
}

module.exports = validatePostId
