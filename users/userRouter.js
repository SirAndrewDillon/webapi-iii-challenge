const express = 'express';
const userdb = require('./userDb')
const router = express.Router();

function validateUserId(req, res, next) {
    const { id } = req.params
    userdb.getById(id)
        .then(user => {
            req.user = user
            next()
        })
        .catch(error => {
            res.status(400).json({ message: 'You put in the wrong ID dog' })
        })
}



router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    userdb.get()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(error => {
            res.status(500).json({ message: 'Chill dude, you messed up!' })
        })
});

router.get('/:id', validateUserId, (req, res) => {
    res.status(200).json(req.user)
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
