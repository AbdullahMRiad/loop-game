import type * as Game from "../types/types"
import Button from "./ui/button"

export default function Square({content}:{content:Game.Play}) {
    return(
        <Button className="w-20 h-20 m-2"
                disabled={content === "" ? false : true}>
            {content}
        </Button>
    )
}