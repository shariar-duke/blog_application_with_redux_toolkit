import BlogHeroSection from "../components/description/BlogHeroSection"
import Navbar from "../components/layout/Navbar"
import BlogDescription from "../components/description/BlogDescription"
import RelatedBlogList from "../components/list/RelatedBlogList"
export default function Blog() {
    return (
        <div >
            <Navbar />
            <div>
                <BlogHeroSection />
            </div>
            <div className="mt-[16px] h-[80vh] grid grid-cols-7 px-[84px] gap-[80px]">
                <div className="col-span-5 grid grid-rows-6 gap-[30px]">
                    <div className="row-span-4 border rounded-md bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url(/mern.webp)" }}></div>
                    <div className="row-span-2">
                        <BlogDescription />
                    </div>
                </div>
                <div className="col-span-2">
                    <RelatedBlogList />
                </div>
            </div>
        </div>
    )
}
