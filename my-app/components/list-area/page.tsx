export default function List() {
    return (
        <>
            <div className="flex items-center w-[80rem] h-[4rem] bg-gray-400 rounded p-4 gap-20">
                {/* First input */}
                <input
                    readOnly
                    type="text"
                    placeholder="Name"
                    value="name"
                    className="outline-none border-grey-400 px-2 text-2xl"
                />

                {/* Second input */}
                <input
                    readOnly
                    type="text"
                    value="url"
                    className="outline-none border-grey-400 px-2 flex-1 text-2xl"
                />

                {/* Button */}
                <button className="ml-2 px-3 py-1 bg-red-500 text-white rounded">
                    Add
                </button>
            </div>
        </>
    )
}