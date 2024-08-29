import { FaRegThumbsUp } from "react-icons/fa6";
export default function BlogGridItem() {
    return (
        <div className="border border-gray-200 shadow-lg rounded-lg overflow-hidden cursor-pointer">
            <div
                className="min-h-[220px] bg-cover bg-center"
                style={{ backgroundImage: "url(/git.webp)" }}
            >

            </div>

            <div className="p-[16px] flex flex-col gap-[10px]">
                <div className="flex justify-between ">
                    <p className="text-gray-400">2023-05-01</p>
                    <div className="flex gap-[2px] justify-center items-center">
                        <FaRegThumbsUp size={18} />
                        <p>100</p>
                    </div>
                </div>

                <p className="text-[22px] font-medium">
                    Top Github Alternatives
                </p>

                <div className="flex gap-[2px]">
                    <p>#python,</p>
                    <p>#tech,</p>
                    <p>#git,</p>
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
