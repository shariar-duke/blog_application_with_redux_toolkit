import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedBlogs } from "./relatedBlogsApi";

const initialState ={ 
    relatedBlogs:[],
    isLoading: false,
    isError:false,
    error:""
}

// creating the async thunk and export i 

export const fetchRelatedBlogs = createAsyncThunk("relatedBlogs/fetchBlogs", async({tags, id}) => 
{
    const relatedBlogs = await getRelatedBlogs({tags, id})
    return relatedBlogs
}
)

// now I need to return the slice 

const relatedBlogSlice = createSlice({
    name : "relatedBlogs",
    initialState:initialState,
    extraReducers: (builder) => {
        builder
          .addCase(fetchRelatedBlogs.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
          }) .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
            state.isLoading = false; state.relatedBlogs = action.payload;
          }).addCase(fetchRelatedBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.relatedBlogs = [];
            state.isError = true;
            state.error = action.error?.message;
          });
    }
})

export default relatedBlogSlice.reducer