import { Movement, Color, Cell, Game, KingIsNotInCheck, Rule, generateLinealMovements } from "../index";
import { Piece } from "./Piece";


const kingMovements = generateLinealMovements(1)

/** King */

export class King1 extends Piece {
   constructor(color: Color, position: Cell) { 
        super(
            color, 
            position,
            [...kingMovements,KingShortCastleMovement, KingLongCastleMovement]
        )
    }

    get id(): string { return "K" }
}



/** Rules */
const KingHasNotMoved: Rule = ( piece:Piece, game: Game ) => true

/** Long Castle */
const RookAHasNotMoved: Rule = ( piece:Piece, game: Game ) => true

const NoPieceFromCtoD: Rule = ( piece:Piece, game: Game ) => true

const NoAttackOnFCndD: Rule = ( piece:Piece, game: Game ) => true


/** Short Castle */
const RookHHasNotMoved: Rule = ( piece:Piece, game: Game ) => true

const NoPieceFromFtoG: Rule = ( piece:Piece, game: Game ) => true

const NoAttackOnFAndG: Rule = ( piece:Piece, game: Game ) => true


/** Movements */

export const KingShortCastleMovement: Movement =  {
    rowMovement: 0,
    colummsMovement: 2,
    maxNumberStepsAllowed: 1,
    rules: [ KingHasNotMoved, RookHHasNotMoved , NoPieceFromFtoG , NoAttackOnFAndG, KingIsNotInCheck]
}


export const KingLongCastleMovement: Movement =  {
    rowMovement: 0,
    colummsMovement: -2,
    maxNumberStepsAllowed: 1,
    rules: [ KingHasNotMoved, RookAHasNotMoved , NoPieceFromCtoD , NoAttackOnFCndD, KingIsNotInCheck]
}