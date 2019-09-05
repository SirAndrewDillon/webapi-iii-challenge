validateUser = (req, res, next) => {
	req.body && Object.keys(req.body).length
		? req.body.name !== ''
			? next()
			: res
					.status(400)
					.json({ message: 'Missing human info, alert authorities!' })
		: res
				.status(400)
				.json({ message: 'Please add text when searching for humans!' })
}

module.exports = validateUser
