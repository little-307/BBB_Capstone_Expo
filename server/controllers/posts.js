import mongoose from 'mongoose';

import PostBranch from '../models/postBranch.js';

// retrieve all posts/branches
export const getPosts = async (req, res) => {
    try {
        const postBranch = await PostBranch.find();
        res.status(200).json(postBranch);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};

// create post/branch
export const createPost = async (req, res) => {
    const post = req.body;

    const newPostBranch = new PostBranch({ ...post });

    try {
        await newPostBranch.save();
        res.status(201).json(newPostBranch);
    } catch (error) {
        res.status(409).json({ message: error.message });
    };
};