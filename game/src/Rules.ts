/** Rules  */

import { Rule, Color } from "./types";
import { Game } from "./Game";
import { Piece } from "./pieces";

/**
 * 
 * @param piece 
 * @param _ 
 * @returns 
 */
export const PieceInSecondRow: Rule = (piece:Piece, _:Game): boolean => {
    return (piece.color == Color.White && piece.position.row == 1)
        || (piece.color == Color.Black && piece.position.row == 6);
}


/**
 * 
 * @param piece 
 * @param _ 
 * @returns 
 */
export const PieceInFifthRow: Rule = (piece:Piece, _:Game): boolean => {
    return (piece.color == Color.White && piece.position.row == 5)
        || (piece.color == Color.Black && piece.position.row == 4);
}

/**
 * 
 * @param piece 
 * @param game 
 * @returns 
 */

export const KingIsInCheck: Rule = ( piece:Piece, game: Game ) => true
