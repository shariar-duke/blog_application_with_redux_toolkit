import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
export default function BlogHeroSection() {
    return (
        <div className="px-[84px]">
            <div className="container mt-4">
                <Link to="/">
                    <div className="flex gap-[2px] cursor-pointer items-center">
                        <IoMdHome size={22} className="text-gray-500" />
                        <p className="font-bold text-[18px] text-gray-500">Home</p>
                    </div>
                </Link>


            </div>
        </div>
    )
}
