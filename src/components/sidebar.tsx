export default function Sidebar({opened}:{opened:boolean}) {
    return(
        <div className={`transition-all h-full bg-gray-300 overflow-hidden ${opened ? "w-1/4" : "w-0"}`}>
            <ul className="m-4 mt-24">
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
            </ul>
        </div>
    )
}