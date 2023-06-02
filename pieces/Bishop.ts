import { Piece, Movement, generateLinealMovements, Color, Cell } from "..";
 

const diagonalMovements = (maxNumberStepsAllowed: number) => generateLinealMovements(maxNumberStepsAllowed).filter(movement => movement.colummsMovement * movement.colummsMovement !== 0);

const bishopMovements = diagonalMovements(8)


/** Bishop */
export class Bishop implements Piece {
    id: string = "B";
    movements: Movement[] = bishopMovements;
    canJumpOverPieces: boolean = false;
    constructor(public color: Color, public position: Cell) { }
}
