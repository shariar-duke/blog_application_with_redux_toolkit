import axios from "axios";

export const getBlogs = async()=> 
{
    const response = await axios.get("/blogs")
    return response.data
}