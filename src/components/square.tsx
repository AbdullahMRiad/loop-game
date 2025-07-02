import type * as Game from "../types/types"

export default function Square({content}:{content:Game.Play}) {
    return(
        <div className="w-20 h-20 btn btn-neutral text-3xl">
            {content}
        </div>
    )
}