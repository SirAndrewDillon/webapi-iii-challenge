const express = 'express';

const router = express.Router();

const userdb = require('./userDb')
// endpoints when url begins with /api/posts
router.get('/', (req, res) => {
    db.get()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.status(500).json({ error: err }));
});

// /api/posts/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.get(id)
        .then(user => {
            if (!user) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.status(200).json(user);
            }
        })
        .catch(err => res.status(500).json({ error: err }));
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validateUserId(req, res, next) {
    req.user = req.params.id;
    if (req.user) {
        next();
    } else {
        res.status(400).json({ message: "invalid user id" });
    }
}


module.exports = router;