import { configureStore } from '@reduxjs/toolkit';

import postReducer from '../postListSlice';
import branchReducer from '../branchSlice';
import branchNameReducer from '../branchNameSlice'

export const store = configureStore( {
    reducer: {
        postList: postReducer,
        branch: branchReducer, 
        branchName: branchNameReducer
    }
});