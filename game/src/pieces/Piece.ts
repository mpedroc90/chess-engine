import { Color, Cell, Movement } from "../index";



/** Represent a Chess Piece */
export abstract class Piece {

    protected _initialPosition = true
    
    constructor(
        public readonly color: Color,
        private _position: Cell,
        public readonly movements: Movement[],
        public readonly canJumpOverPieces: boolean = false,
    ) { }

    abstract get id(): string;

    /**
     * @returns true if the piece has moved, false otherwise.
     */
    hasMoved(): Boolean {
        return this._initialPosition === false;
    }

    get position(): Cell {
        return this._position;
    }

    moveTo(value: Cell) {
        this._initialPosition = false;
        this._position = value;
    }

    isWhite() : boolean  { return this.color == Color.White; }
    isBlack() : boolean  { return this.color == Color.Black; }
}
