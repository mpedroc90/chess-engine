import { Color, Cell } from "../types";
import { generateLinealMovements } from "../Movements";
import { Piece } from "./Piece";
 

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