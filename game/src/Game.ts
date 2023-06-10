import { Color, cell } from "./types";
import { Board } from "./Board";
import { Pawn, Rook, Knight, King, Queen } from "./pieces";
import { Piece } from "./pieces/Piece";


export class Game {

    public board: Board;

    private constructor(
        initialPieceConfiguration: Piece[]
    ) {

        this.board = Board.create(initialPieceConfiguration);
    }

    static create(initialPieceConfiguration: Piece[]): Game {
        return new Game(initialPieceConfiguration);
    }
}


export  const createChessGame : () => Game = () => Game.create(defaultInitialPieceConfiguration());


export type InitialPieceConfiguration = ()=> Piece[]

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