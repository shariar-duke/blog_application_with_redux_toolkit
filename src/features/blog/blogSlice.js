import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBlog } from "./blogApi"

const initialState ={

    blog:{}, 
    isLoading:false,
    isError:false,
    error:""  // eta error message er jnno 
}

// creating the async thunk and export it 

export const fetchBlog = createAsyncThunk("blog/fetchBlog" , async(id) => {
    const video = await getBlog(id)
    return video;
})

// now I need to create the slice 

const singleBlogSlice = createSlice({
    name : "video",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBlog.pending , (state )=> 
        { state.isError = false
          state.isLoading = true
        }).addCase(fetchBlog.fulfilled, ( state, action ) => 
        {
            state.isLoading = false,
            state.blog = action.payload
        }).addCase(fetchBlog.rejected, (state, action) => {
            state.isLoading = false
            state.blog = {}
            state.isError = true
            state.error = action.error?.message;
        })
    }
})

export default singleBlogSlice.reducer