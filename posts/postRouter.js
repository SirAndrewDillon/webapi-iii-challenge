const express = 'express';

const router = express.Router()

const db = require('./postDb')



// Get all posts
router.get('/', (req, res) => {
    db.get()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => res.status(500).json({ error: err }));
});

// Validate post id and then get post by id
router.get('/:id', validatePostId, (req, res) => {
    res.status(200).json(req.post);
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware




module.exports = router;