import { Color, Cell } from "../index";
import { MovementMatrix, generateMovementsGivenMatrix } from "../movements_matrix";
import { Piece } from "./Piece";

/** Represent the kinght movements in the board */
const kightMovementMatrix: MovementMatrix= [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2]
  ]


 const kightMovements = generateMovementsGivenMatrix(kightMovementMatrix)(1);


/** Knight */
export class Knight extends Piece {
    constructor(color: Color, position: Cell) { 
        super(color,position, kightMovements, true)
    }
    get id():string {return "N" }
}



