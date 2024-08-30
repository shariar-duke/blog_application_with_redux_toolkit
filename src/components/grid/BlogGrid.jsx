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

    // want to decide which content will render based on success, pending and error sate 

    let content;
    if (isLoading) {
        content = <Loading />
    }

    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }

    if (!isError && !isLoading && blogs?.length == 0) {
        content = <div className="col-span-12">No Blog Found</div>;
    }

    if (!isError && !isLoading && blogs?.length > 0) {
        content = blogs.map((blog) => <BlogGridItem key={blog.id} blog={blog} className="col-span-1" />)
    }


    return (
        <div className="grid grid-cols-3 gap-[30px]">
            {
                content
            }
        </div>
    )
}
