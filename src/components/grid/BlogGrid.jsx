
import BlogGridItem from "./BlogGridItem"
export default function BlogGrid() {
    return (
        <div className="grid grid-cols-3 gap-[30px]">

            <BlogGridItem className="col-span-1" />
            <BlogGridItem className="col-span-1" />
            <BlogGridItem className="col-span-1" />


        </div>
    )
}
