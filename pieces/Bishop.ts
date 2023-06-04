import { Movement, generateLinealMovements, Color, Cell } from "..";
import { Piece, Piece } from "./Piece";
 

const diagonalMovements = (maxNumberStepsAllowed: number) => generateLinealMovements(maxNumberStepsAllowed).filter(movement => movement.colummsMovement * movement.colummsMovement !== 0);

const bishopMovements = diagonalMovements(8)


/** Bishop */
export class Bishop extends Piece {

    get id(): string { return "B" }

    constructor(color: Color, position: Cell) {
        super(
            color, 
            position, 
            bishopMovements
        )
     }
}