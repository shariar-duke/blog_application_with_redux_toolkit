
export default function SideBar() {
    return (
        <div className="p-4 bg-white shadow-md rounded-md h-full">
            <label htmlFor="sort" className="text-lg font-semibold text-gray-700 block mb-1">Sort:</label>
            <select id="sort" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 my-[10px]">
                <option value="newest">Default</option>
                <option value="newest">Newest</option>
                <option value="mostLiked">Most Liked</option>
            </select>

            <div className="mb-4 mt-[8px]">
                <label className="text-lg font-semibold text-gray-800">Filter</label>
            </div>
            <div className="space-y-2">
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="all"
                        name="filter"
                        value="all"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                    />
                    <label
                        htmlFor="all"
                        className="ml-2 text-base font-medium text-gray-800"
                    >
                        All
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="saved"
                        name="filter"
                        value="saved"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                    />
                    <label
                        htmlFor="saved"
                        className="ml-2 text-base font-medium text-gray-800"
                    >
                        Saved
                    </label>
                </div>
            </div>

        </div>

    )
}
