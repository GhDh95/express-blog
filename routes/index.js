const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');


router.get('/', PostController.index)
router.post('/', PostController.store)
router.get('/post/:id', PostController.show);


module.exports = router;