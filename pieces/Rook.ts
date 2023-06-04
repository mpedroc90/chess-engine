import {Color, Cell, generateLinealMovements } from "../index";
import { Piece } from "./Piece";


const straightMovements = (maxNumberStepsAllowed: number) => generateLinealMovements(maxNumberStepsAllowed).filter(movement => movement.colummsMovement * movement.colummsMovement === 0);

const rookMovements = straightMovements(8)

/** Rook */
export class Queen extends Piece {
    constructor(color: Color, position: Cell) { 
        super(color,position, rookMovements);
    }
    get id():string {return "R" }
}