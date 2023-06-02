import { Piece, Movement, Color, Cell, generateLinealMovements } from "../index";


const straightMovements = (maxNumberStepsAllowed: number) => generateLinealMovements(maxNumberStepsAllowed).filter(movement => movement.colummsMovement * movement.colummsMovement === 0);

const rookMovements = straightMovements(8)

/** Rook */
export class Rook implements Piece {
    id: string = "R";
    movements: Movement[] = rookMovements;
    canJumpOverPieces: boolean = false;
    constructor(public color: Color, public position: Cell) { }
}
