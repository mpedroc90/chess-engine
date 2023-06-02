import { Piece , Movement, PieceInFifthRow, PieceInSecondRow , Rule, Game , Color , Cell } from "../index";

/** Pawn */
export class Pawn implements Piece {
    id: string = "P";
    movements: Movement[] = [SingleStep, PawnDoubleStep, EnPassantLeft, EnPassantRight];
    canJumpOverPieces: boolean = false;
    constructor(public color: Color, public position: Cell) { }
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