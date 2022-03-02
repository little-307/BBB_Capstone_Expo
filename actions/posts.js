import * as api from '../api/index';

import { getPosts, createPost, updatePost } from '../state/postListSlice';

export const retrieveMessageList = () => async (dispatch) => {
    try {
        const { data } = await api.getBranches();
        dispatch(getPosts(data))
    } catch (error) {
        console.log(error)
    }
}

export const createPostList = (post) => async (dispatch) => {
    try {
        const { data } = await api.createBranches(post);
        dispatch(createPost(data))
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const editBranch = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.editBranch(id, post);
        dispatch(updatePost(data))
    } catch (error) {
        console.log(error)
    }
}