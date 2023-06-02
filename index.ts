export class Game {
    public history: Moved [] = [];
    public board: Board = new Board()

}

/**
 * Represent the board and keep the state of the game.
 */
export class Board {
    private pieces: Map<Cell, Piece> = new Map<Cell, Piece>()
}

/** Represent the cell coordenates in the board */
export type Cell = {
    row: number,
    column: number
}

/** Represent a Chess Piece */
export interface Piece {
    id: string,
    color : Color,
    position : Cell,
    movements: Movement[]
    canJumpOverPieces: boolean,
}

/**
 *  It represents the description/metadata to the engine performs a move.
 */
export type Movement = {
    /** number of rows  from the current position that the piece can move.  */
   rowMovement: number;

   /** number of columns from the current position that the piece can move. */
   colummsMovement: number;

   /**  
    * Number of step allowed. It means that the pieces can perform the move 
    * this number of time whereas board contraints allows it  
    */
   maxNumberStepsAllowed: number;

   /**
    * Rules that  must obbey in order the move can proceed.
    */ 
   rules: Rule[];
}


/**
 * This type represents a particular rule or trait for a piece in the game.
 */
export type Rule = (piece:Piece, game: Game) => boolean


/**
 * Represents a move performed during thegame
 */
export type Moved = {
    color: Color, 

    /** it will be the standard representation of a move in chess */
    id: String; 
}

export enum Color {
    White, 
    Black
}


/** Rules  */

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

export const KingIsNotInCheck: Rule = ( piece:Piece, game: Game ) => true


/** General Movements */

/**
 *  This type represents the set of possible movements a object can perform in a grid
 */
export type MovementMatrix = [row: number, column: number ][];


/**
 *  This high order function creates 
 */
export const generateMovementsGivenMatrix = (matrixMovement: MovementMatrix) =>  (maxNumberStepsAllowed: number) : Movement [] =>  {
    return matrixMovement.map<Movement>( ([rowMovement, colummsMovement]) => ({
        rowMovement,
        colummsMovement,
        maxNumberStepsAllowed,
        rules:[]
    }));
}


/** Represent the all the lineal movements in the board */
const linealMovementgMatrix: MovementMatrix =  [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1]
  ];


/**
 * Generate all straight moves that can performed in a chess board excepts those special move that only a pieces is allows to do. 
 */
export const generateLinealMovements =  generateMovementsGivenMatrix(linealMovementgMatrix);
