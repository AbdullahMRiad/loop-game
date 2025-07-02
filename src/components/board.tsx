import type * as Game from "../types/types"
import Square from "./square";

export default function Board() {
    const DEBUG_BOARD: Game.Board = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]]
    return(
        DEBUG_BOARD.map(
            (row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map(
                        (cell, cellIndex) => (
                            <Square key={cellIndex} content={cell}/>
                        )
                    )}
                </div>
            )
        )
    )
}