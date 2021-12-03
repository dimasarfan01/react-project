import { configureStore } from '@reduxjs/toolkit';
import { postAPI } from '../services/PostsApi';

export default configureStore({
  reducer: {
    [postAPI.reducerPath]: postAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
});
