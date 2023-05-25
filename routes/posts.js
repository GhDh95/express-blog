const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "posts index"});
});


router.get('/post/:id', (req, res) => {
    res.json({message: "post: " + req.params.id});
})

module.exports = router;