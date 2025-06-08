const express = require('express');
const router = express.Router();

// Import Controller
const { createComment } = require('../controllers/CommentControler') ; 
const { createPost } = require('../controllers/PostController');
const { likePost , unlikePost } = require('../controllers/LikeController');

// Mapping Create
router.post('/comments/create', createComment);
router.post('/posts/create',createPost) ; 
router.post('/likes/like',likePost) ; 
router.post('/likes/unlike',unlikePost) ; 

// Export
module.exports = router;