function validatePost(req, res, next) {
     req.body && Object.keys(req.body).length
    ?   req.body.text !== ''
        ?   next()
        :   res.status(400).json({message: 'Enter correct text field, human!'})
    :   res.status(400).json({message: 'Enter post data human!'})
};


module.exports = validatePost
