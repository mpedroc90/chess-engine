import {Color, Cell } from "../types";
import { generateLinealMovements } from "../Movements";
import { Piece } from "./Piece";


const straightMovements = (maxNumberStepsAllowed: number) => generateLinealMovements(maxNumberStepsAllowed).filter(movement => movement.colummsMovement * movement.colummsMovement === 0);

const rookMovements = straightMovements(8)

/** Rook */
export class Rook extends Piece {
    constructor(color: Color, position: Cell) { 
        super(color,position, rookMovements);
    }
    get id():string {return "R" }
}