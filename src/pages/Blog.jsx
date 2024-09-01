import BlogHeroSection from "../components/description/BlogHeroSection"
import Navbar from "../components/layout/Navbar"
import BlogDescription from "../components/description/BlogDescription"
import RelatedBlogList from "../components/list/RelatedBlogList"
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../features/blog/blogSlice";
import { useEffect } from "react";
import Loading from "../components/ui/Loading";
import { useParams } from "react-router-dom";
export default function Blog() {

    const dispatch = useDispatch()
    const { blog, isError, isLoading, error } = useSelector(
        (state) => state.blog
    );

    // blg ta ber kore ante hbe but tar jnno of course id lagbe 

    const { blogId } = useParams()

    // now fetching the singleBlog . I need to fetch it inside the useEffect hook 

    useEffect(() => {
        dispatch(fetchBlog(blogId))
    }, [blogId, dispatch])

    const { image, tags, id } = blog
    // decide what to render 
    let content = null;

    // jode loading state a thake
    if (isLoading) content = <Loading />;
    // jode error thake
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    // jode response ase but blank ekta object aslo . blank object a to id thakbe na
    if (!isLoading && !isError && !blog.id) {
        content = <div className="col-span-12">No video found </div>;
    }

    if (!isLoading && !isError && blog.id) {
        content = (

            <div className="mt-[16px] h-[80vh] grid grid-cols-7 px-[84px] gap-[80px]">
                <div className="col-span-5 grid grid-rows-6 gap-[30px]">
                    <div className="row-span-4 border rounded-md bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${image})` }}></div>
                    <div className="row-span-2">
                        <BlogDescription blog={blog} />
                    </div>
                </div>
                <div className="col-span-2">
                    <RelatedBlogList tags={tags} id={id} />
                </div>
            </div>)

    }

    return (
        <div >
            <Navbar />
            <div>
                <BlogHeroSection />
            </div>

            {
                content
            }

        </div>
    )
}
