/* eslint-disable react/prop-types */
import { FaRegThumbsUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function BlogGridItem({ blog }) {

    const { createdAt, image, likes, tags, title, isSaved, id } = blog
    return (
        <div className="border border-gray-200 shadow-lg rounded-lg overflow-hidden cursor-pointer">
            <Link to={`/blog/${id}`}>
                <div
                    className="md:min-h-[220px] lg:min-h-[270px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                >

                </div>
            </Link>


            <div className="p-[16px] flex flex-col gap-[10px] h-full ">
                <div className="flex justify-between  col-span-1">
                    <p className="text-gray-400">{createdAt}</p>
                    <div className="flex gap-[2px] justify-center items-center">
                        <FaRegThumbsUp size={18} />
                        <p>{likes}</p>
                    </div>
                </div>

                <Link to={`/blog/1`} className=" col-span-1">
                    <p className="text-[22px] font-medium">
                        {title}
                    </p>
                </Link>

                <div className="flex gap-[2px]  col-span-1">
                    {tags && tags.map((tag, index) => {
                        return (
                            <span key={index}>
                                {index + 1 !== tags.length ? `#${tag}, ` : `#${tag}`}
                            </span>
                        );
                    })}
                </div>

                <div className="  " >
                    <button className={`${isSaved ? "text-green-400 bg-green-100" : "text-red-400 bg-red-100"} font-medium px-[12px] py-[4px] rounded-full`}>
                        {isSaved ? "saved" : "unsaved"}
                    </button>
                </div>
            </div>
        </div>
    )
}
