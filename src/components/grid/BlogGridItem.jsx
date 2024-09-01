/* eslint-disable react/prop-types */
import { FaRegThumbsUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function BlogGridItem({ blog }) {

    const { createdAt, image, likes, tags, title, isSaved, id } = blog
    return (
        <div className="border border-gray-200 shadow-lg rounded-lg overflow-hidden cursor-pointer">
            <Link to={`/blog/${id}`}>
                <div
                    className="min-h-[220px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                >

                </div>
            </Link>


            <div className="p-[16px] flex flex-col gap-[10px]">
                <div className="flex justify-between ">
                    <p className="text-gray-400">{createdAt}</p>
                    <div className="flex gap-[2px] justify-center items-center">
                        <FaRegThumbsUp size={18} />
                        <p>{likes}</p>
                    </div>
                </div>

                <Link to={`/blog/1`}>
                    <p className="text-[22px] font-medium">
                        {title}
                    </p>
                </Link>

                <div className="flex gap-[2px]">
                    {tags && tags.map((tag, index) => {
                        if (index + 1 !== tags.length) {
                            return `#${tag}, `;
                        } else {
                            return `#${tag}`;
                        }
                    })}

                </div>

                <div>
                    <button className="text-green-400 font medium px-[12px] py-[4px] rounded-full bg-green-100">
                        Saved
                    </button>
                </div>


            </div>
        </div>
    )
}
