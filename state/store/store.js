import { configureStore } from '@reduxjs/toolkit';

import postReducer from '../postListSlice';

export const store = configureStore( {
    reducer: {
        postList: postReducer,
    }
});