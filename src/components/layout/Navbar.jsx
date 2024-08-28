
export default function Navbar() {
    return (
        <nav className="py-6 border-b m-auto">
            <div className="w-full flex justify-between px-20">

                <div className="logo">
                    <a href="index.html">
                        <img src="/LWSBlog.svg" alt="search" />
                    </a>
                </div>

                <div className="flex gap-[10px]">
                    <button className="px-[20px] bg-black text-white text-[18px] rounded-md cursor-pointer font-bold">sign in</button>
                    <button className="px-[20px] bg-black text-white text-[18px] rounded-md cursor-pointer font-bold">sign up</button>
                </div>
            </div>
        </nav>
    )
}
