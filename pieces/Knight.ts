import { Piece, Movement, Color, Cell, generateMovementsGivenMatrix, MovementMatrix } from "../index";

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
export class Knight implements Piece {

    id: string = "N";
    movements: Movement[] = kightMovements;
    canJumpOverPieces: boolean = true;
    constructor(public color: Color, public position: Cell) { }
}



