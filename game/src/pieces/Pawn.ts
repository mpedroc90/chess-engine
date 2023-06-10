
import { Game } from "../Game";
import { Movement } from "../Movements";
import { PieceInFifthRow, PieceInSecondRow } from "../Rules";
import { Color, Cell, Rule } from "../types";
import { Piece } from "./Piece";

/** Pawn */
export class Pawn extends Piece {
    
    constructor(color: Color, position: Cell) { 
        super(
            color,
            position, 
            [SingleStep, PawnDoubleStep, EnPassantLeft, EnPassantRight]
        )
    }
    
    get id():string {return "P" }
}



/** Rules */

const LastMoveWasPawnWithDoubleStepOnNeighbordColumn = (column: number): Rule => (piece:Piece, game: Game) => true


/** Movements */

const EnPassantLeft: Movement =  {
    rowMovement:1,
    colummsMovement: -1,
    maxNumberStepsAllowed: 1,
    rules : [PieceInFifthRow, LastMoveWasPawnWithDoubleStepOnNeighbordColumn(-1)]
}

const EnPassantRight: Movement =  {
    rowMovement:1,
    colummsMovement: -1,
    maxNumberStepsAllowed: 1,
    rules : [PieceInFifthRow, LastMoveWasPawnWithDoubleStepOnNeighbordColumn(-1)]
}



const SingleStep: Movement =  {
    rowMovement:1,
    colummsMovement: 0,
    maxNumberStepsAllowed: 1,
    rules : []
}

const PawnDoubleStep: Movement =  {
   rowMovement:2,
   colummsMovement: 0,
   maxNumberStepsAllowed: 1,
   rules : [PieceInSecondRow]
}