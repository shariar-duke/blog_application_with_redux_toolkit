import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice"
import blogReducer from "../features/blog/blogSlice"
import relatedBlogReducer from "../features/relatedBlogs/relatedBlogsSlice"

export const store = configureStore({
    reducer:{
        blogs: blogsReducer, 
        blog:blogReducer,
        relatedBlogs:relatedBlogReducer
    }
})