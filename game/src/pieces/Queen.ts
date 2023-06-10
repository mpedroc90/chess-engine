import { Color, Cell } from "..";
import { generateLinealMovements } from "../movements_matrix";
import { Piece } from "./Piece";


const queenMovements = generateLinealMovements(8);

/** Queen */
export class Queen extends Piece {
    constructor(color: Color, position: Cell) { 
        super(color,position, queenMovements);
    }
    get id():string {return "Q" }
}