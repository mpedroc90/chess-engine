import { Game } from "./Game";
import { Piece } from "./pieces/Piece";


/** Represent the cell coordenates in the board */
export type Cell = {
    id: String,
    row: number,
    column: number
}

/**
 * Create a cell of the board.
 * @param row
 * @param column 
 * @returns a cell of the board
 */
export const cell = (row: number, column: number): Cell => ({
  id: `${row}-${column}`,
  row,
  column
})


export enum Color {
    White, 
    Black
}

/**
 * This type represents a particular rule or trait for a piece in the game.
 */
export type Rule = (piece:Piece, game: Game) => boolean


