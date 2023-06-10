import { Movement, Color, Cell, Game, KingIsNotInCheck, Rule, cell } from "../index";
import { generateLinealMovements } from "../movements_matrix";
import { Piece  } from "./Piece";
import { Rook } from "./Rook";

const kingMovements = generateLinealMovements(1);

/** King */

export class King extends Piece {
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

/**
 * Verifies if the king have been move during the game. 
 * @param piece should be an instance of King
 * @param game should be an instance of the game
 * @returns true if the king haven't been moved during the whole game
 */
export const KingHasNotMoved: Rule = ( piece:Piece, game: Game ) => 
    piece instanceof King && piece.hasMoved() === false

/**
 * Verifies if the Rook have been move during the game. 
 * @param piece should be an instance of Rook
 * @param game should be an instance of the Game
 * @returns true if the rook haven't been moved during the whole game
 */
export const RookHasNotMoved: Rule = ( piece:Piece, game: Game )  => piece instanceof Rook && piece.hasMoved() === false



/** Long Castle */


/**
 * Verifies if neither the king nor rook have been move during the game.
 * @param piece 
 * @param game 
 * @returns true if both pieces have not moved
 */

export const LongCastlePiecesHaveNotMoved: Rule = ( piece:Piece, game: Game ) => { 
    
    if(!KingHasNotMoved(piece, game)) return false;
    
    const rook: Piece | null = game.board.get(cell(piece.position.row, 1))
    
    return rook !== null && RookHasNotMoved(rook, game);
}

/**
 * @returns returns true if there are no pieces in the cell betwen a and d depending of the color
 */
export const NoPiecesFromBtoD: Rule = ( piece:Piece, game: Game ) => {
    const row = piece.isWhite() ? 1 : 8
    const columns = [2, 3, 4]
    const path = columns.map( column => cell(row, column))
    return game.board.areCellsEmpty(...path);
}


export const NoAttackFromBndD: Rule = ( piece:Piece, game: Game ) => true


/** Short Castle */

/**
 * Verifies if neither the king nor rook have been move during the game.
 * @param piece 
 * @param game 
 * @returns true if both pieces have not moved
 */

export const ShortCastlePiecesHaveNotMoved: Rule = ( piece:Piece, game: Game ) => { 
    
    if(!KingHasNotMoved(piece, game)) return false;
    
    const rook: Piece | null = game.board.get(cell(piece.position.row, 8))
    
    return rook !== null && RookHasNotMoved(rook, game);
}

export const RookHHasNotMoved: Rule = ( piece:Piece, game: Game ) => true


/**
 * @returns returns true if there are no pieces in the cell betwen f and g depending of the color
 */
export const NoPiecesFromFtoG: Rule = ( piece:Piece, game: Game ) => {
    const row = piece.isWhite() ? 1 : 8
    const columns = [6,7]
    const path = columns.map( column => cell(row, column))
    return game.board.areCellsEmpty(...path);
}


export const NoAttackOnFAndG: Rule = ( piece:Piece, game: Game ) => true


/** Movements */

export const KingShortCastleMovement: Movement =  {
    rowMovement: 0,
    colummsMovement: 2,
    maxNumberStepsAllowed: 1,
    rules: [ KingHasNotMoved, RookHHasNotMoved , NoPiecesFromFtoG , NoAttackOnFAndG, KingIsNotInCheck]
}


export const KingLongCastleMovement: Movement =  {
    rowMovement: 0,
    colummsMovement: -2,
    maxNumberStepsAllowed: 1,
    rules: [LongCastlePiecesHaveNotMoved , NoPiecesFromBtoD , NoAttackFromBndD, KingIsNotInCheck]
} 