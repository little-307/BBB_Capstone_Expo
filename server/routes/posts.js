// import controller logic for requests
import express from 'express'

//import controller functions
import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

// Set up router methods
router.get('/', getPosts);
router.post('/', createPost);

export default router