import Navbar from "../components/layout/Navbar"
import SideBar from "../components/layout/SideBar"
import BlogGrid from "../components/grid/BlogGrid"
export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="w-full px-20 grid grid-cols-6 gap-[40px] mt-[60px] h-[75vh]">
                <div className="w-full col-span-">
                    <SideBar />
                </div>
                <div className="col-span-5 h-[75vh] overflow-auto px-[8px]"><BlogGrid /></div>
            </div>
        </div>
    )
}
