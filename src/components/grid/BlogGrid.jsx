import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loading from "../ui/Loading";
import BlogGridItem from "./BlogGridItem"
export default function BlogGrid() {

    const dispatch = useDispatch()

    // blogs er state theke amader j j data lagbe 
    const { blogs, isLoading, isError, error } = useSelector((state) => state.blogs)
    useEffect(() => {
        dispatch(fetchBlogs())
    }, [dispatch])

    console.log("The blogs items are", blogs)
    return (
        <div className="grid grid-cols-3 gap-[30px]">

            <BlogGridItem className="col-span-1" />
            <BlogGridItem className="col-span-1" />
            <BlogGridItem className="col-span-1" />

        </div>
    )
}
