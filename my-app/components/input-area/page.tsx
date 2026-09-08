export default function Input() {
    return (
        <>
            <div className="flex flex-row items-center justify-center gap-4 h-[10rem]">
                <input
                    type="text"
                    placeholder="First"
                    className="outline-none bg-transparent border-2 border-red-500 text-2xl px-2 py-1 w-[15rem] h-[4rem]"
                />
                <input
                    type="text"
                    placeholder="Second"
                    className="outline-none bg-transparent border-2 border-red-500 text-2xl px-2 py-1 w-[30rem] h-[4rem]"
                />
                <button
                    type="button"
                    className="px-6 py-3 text-lg text-white bg-blue-600 rounded-md hover:bg-blue-700 w-[10rem] h-[4rem] "
                >
                    Submit
                </button>
            </div>
        </>
    )
}