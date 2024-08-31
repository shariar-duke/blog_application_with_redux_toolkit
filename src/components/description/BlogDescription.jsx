/* eslint-disable react/prop-types */
import { VscSave } from "react-icons/vsc";
import { AiOutlineLike } from "react-icons/ai";
export default function BlogDescription({ blog }) {
    const { tags, description, title } = blog
    return (
        <div className="mb-[20px]">
            <p className="text-[24px] font-bold font-inter">{title}</p>
            <p className="text-[16px]">
                {tags && tags.map((tag) => `#${tag}`).join(', ')}
            </p>

            <div className="flex gap-[16px] mt-[12px]">
                <div className="flex items-center cursor-pointer">
                    <AiOutlineLike size={18} />
                    <p className="text-[20px] font-medium"> Liked </p>

                </div>

                <div className="flex items-center cursor-pointer">
                    <VscSave size={18} />
                    <p className="text-[20px] font-medium"> Saved </p>

                </div>
            </div>

            <p className="text-[17px] mt-[6px] font-medium text-gray-400">{description}</p>
        </div>
    )
}
