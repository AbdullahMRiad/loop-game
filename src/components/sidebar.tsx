import Button from "./ui/button";

export default function Sidebar({opened}:{opened:boolean}) {
    return(
        <div className={`fixed transition-all h-full overflow-hidden duration-300 ease-in-out w-64 ${opened ? "left-0 scale-100" : "-left-full -scale-100"}`}>
            <ul className="flex flex-col items-center m-4 mt-24 p-3 outline-4 rounded-xl h-6/9 overflow-y-scroll">
                <h4 className="z-10 text-2xl font-semibold">Move list</h4>
                {Array.from(Array(10).keys()).map(
                    (i) => (
                        <Button key={i} className="text-sm w-30 my-2 h-10 shrink-0">{i===0?"Game start":("Move #" + i)}</Button>
                    )
                )}
            </ul>
        </div>
    )
}