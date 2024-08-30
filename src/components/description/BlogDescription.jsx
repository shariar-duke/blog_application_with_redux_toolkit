import { VscSave } from "react-icons/vsc";
import { AiOutlineLike } from "react-icons/ai";
export default function BlogDescription() {
    return (
        <div className="mb-[20px]">
            <p className="text-[24px] font-bold font-inter">MERN Stack For Web Development</p>
            <p className="text-[18px] font-medium text-gray-600">#python, #tech, #git</p>
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

            <p className="text-[17px] mt-[6px] font-medium text-gray-400">A MERN stack comprises a collection of four frameworks (MongoDB, ExpressJs, ReactJs and NodeJs) used to develop full-stack javascript solutions for rapid, scalable, and secure applications. Each framework serves a different purpose in creating successful web applications. It is an excellent choice for companies looking to develop high-quality responsive applications quickly using just one language.</p>
        </div>
    )
}
