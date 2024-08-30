import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBlogs } from "./blogsApi"

const initialState ={

    blogs:[], 
    isLoading:false,
    isError:false,
    error:""  // eta error message er jnno 
}

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async()=> 
{
    const blogs = await getBlogs()
    return blogs
})


const blogsSlice = createSlice({
    name:"blogs", 
    initialState:initialState, 
    extraReducers:(builder)=>  {
        builder.addCase(fetchBlogs.pending , (state )=> 
        { state.isError = false
          state.isLoading = true
        }).addCase(fetchBlogs.fulfilled, ( state, action ) => 
        {
            state.isLoading = false,
            state.videos = action.payload
        }).addCase(fetchBlogs.rejected, (state, action) => {
            state.isLoading = false
            state.videos =[]
            state.isError = true
            state.error = action.error?.message;
        })
    }
})

export default blogsSlice.reducer
