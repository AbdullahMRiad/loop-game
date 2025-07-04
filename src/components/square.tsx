import type * as Game from "../types/types"

export default function Square({content}:{content:Game.Play}) {
    return(
        <button className="w-20 
                           h-20
                           rounded-xl
                           text-3xl
                           m-2
                           transition-all
                           bg-gray-100
                           outline-4
                           outline-black
                           shadow-[0_5px_0_2px_rgba(0,0,0,1)]
                           hover:bg-gray-200
                           hover:scale-102
                           active:scale-98
                           active:bg-gray-300
                           disabled:hover:bg-gray-100
                           disabled:hover:scale-100
                           disabled:active:scale-100
                           disabled:active:bg-gray-100"
                disabled={content === "" ? false : true}>
            {content}
        </button>
    )
}