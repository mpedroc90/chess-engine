import { Piece } from "./pieces/Piece";
import { Cell } from ".";

/**
 * Represent the board and keep the state of the game.
 */

export class Board {


    private piecesMap: Map<String, Piece> = new Map<String, Piece>();

    private constructor(pieces: Piece[]) {
        pieces.forEach(piece => {
            this.piecesMap.set(piece.position.id, piece);
        });
    }

    get(cell: Cell): Piece | null {
        return this.piecesMap.get(cell.id) || null;
    }

    renderBoard(): String {
        return "";
    }

    static create(initialPieceConfiguration: Piece[]): Board {
        return new Board(initialPieceConfiguration);
    }

}
