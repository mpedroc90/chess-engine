import { Color, Cell, Movement } from "..";



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

    hasMoved(): Boolean {
        return this._initialPosition;
    }

    get position(): Cell {
        return this._position;
    }

    moveTo(value: Cell) {
        this._initialPosition = false;
        this._position = value;
    }
}
