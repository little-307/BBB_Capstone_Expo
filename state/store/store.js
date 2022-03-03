import { configureStore } from '@reduxjs/toolkit';

import postReducer from '../postListSlice';
import branchReducer from '../branchSlice';

export const store = configureStore( {
    reducer: {
        postList: postReducer,
        branch: branchReducer,
    }
});