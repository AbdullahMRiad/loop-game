export default function Sidebar({opened}:{opened:boolean}) {
    return(
        <div className={opened ? 'h-full bg-gray-300 w-1/4' : 'h-full bg-gray-300 w-0 overflow-hidden'}>
            <ul>
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