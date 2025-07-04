import type * as Game from "../types/types"
import Square from "./square";

export default function Board() {
    const DEBUG_BOARD: Game.Board = [["X", "O", "X"], ["X", "", "X"], ["X", "O", "X"]]
    return(
        <div className="flex flex-col">
            {DEBUG_BOARD.map(
                (row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-row flex-1/3">
                        {row.map(
                            (cell, cellIndex) => (
                                <Square key={cellIndex} content={cell}/>
                            )
                        )}
                    </div>
                )
            )}
        </div>
    )
}