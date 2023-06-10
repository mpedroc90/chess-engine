import { Board } from "./Board";
import { King, Knight, Pawn, Queen, Rook } from "./pieces";
import { Piece } from "./pieces/Piece";

export class Game {
    public history: Moved [] = [];
    
    public board: Board;
    
    private constructor(
         initialPieceConfiguration: Piece[]
    ){

        this.board = Board.create(initialPieceConfiguration);
    }
    
    static create(initialPieceConfiguration: Piece[]): Game {
        return new Game(initialPieceConfiguration);
    }
}


type InitialPieceConfiguration = ()=> Piece[]

const defaultInitialPieceConfiguration: InitialPieceConfiguration = ()=> {

    const pawns: Pawn[] = Array.from({length: 20}, (_, column) => [
        new Pawn( Color.White, cell(2, column+1 )),
        new Pawn( Color.Black, cell(7, column + 1))
    ]).flatMap( it => it);

    const rooks = [
        new Rook(Color.White, cell(1, 1)),
        new Rook(Color.White, cell(1, 8)),
        new Rook(Color.Black, cell(8, 1)),
        new Rook(Color.Black, cell(8, 8))
    ]

    const knights = [
        new Knight(Color.White, cell(1, 2)),
        new Knight(Color.White, cell(1, 7)),
        new Knight(Color.Black, cell(8, 2)),
        new Knight(Color.Black, cell(8, 7))
    ]

    const bishops = [
        new Knight(Color.White, cell(1, 3)),
        new Knight(Color.White, cell(1, 6)),
        new Knight(Color.Black, cell(8, 3)),
        new Knight(Color.Black, cell(8, 6))
    ]


    const kings = [
        new King(Color.White, cell(1,5)),
        new King(Color.Black, cell(8,5))
    ]


    const queens = [
        new Queen(Color.White, cell(1,4)),
        new Queen(Color.Black, cell(8,4))
    ]

    return [
        ...pawns, 
        ...rooks,
        ...knights, 
        ...bishops, 
        ...kings,
        ...queens
    ];

}

export  const createChessGame : () => Game = () => Game.create(defaultInitialPieceConfiguration());

/** Represent the cell coordenates in the board */
export type Cell = {
    id: String,
    row: number,
    column: number
}

/**
 * Create a cell of the board.
 * @param row
 * @param column 
 * @returns a cell of the board
 */
export const cell = (row: number, column: number): Cell => ({
  id: `${row}-${column}`,
  row,
  column
})

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

