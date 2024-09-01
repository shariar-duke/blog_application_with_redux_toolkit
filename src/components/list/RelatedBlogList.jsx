/* eslint-disable react/prop-types */
import RelatedBlogItem from "./RelatedBlogItem"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import Loading from "../ui/Loading";
export default function RelatedBlogList({ tags, id }) {
    const { relatedBlogs, isLoading, isError, error } = useSelector((state) => state.relatedBlogs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRelatedBlogs({ id: id, tags }))
    }, [dispatch, tags, id])

    // let's decide which content will render
    let content;
    if (isLoading) {
        content = <Loading />;
    }

    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }

    if (!isError && !isLoading && relatedBlogs?.length == 0) {
        content = <div className="col-span-12">
            <p className="text-[20px] font-extrabold">No Blogs Found</p>

        </div>;
    }
    if (!isError && !isLoading && relatedBlogs?.length > 0) {
        content = relatedBlogs.map((blog) => <RelatedBlogItem key={blog.id} blog={blog} />)
    }
    return (
        <div className="flex flex-col gap-[40px]">
            {content}
        </div>
    )
}
