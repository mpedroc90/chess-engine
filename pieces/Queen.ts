import { Piece, Movement, Color, Cell, generateLinealMovements } from "..";


const queenMovements = generateLinealMovements(8)

/** Queuen */
export class Queen implements Piece {
    id: string = "Q";
    movements: Movement[] = queenMovements;
    canJumpOverPieces: boolean = false;
    constructor(public color: Color, public position: Cell) { }
}
