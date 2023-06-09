import { Piece } from "./pieces/Piece";
import { Cell } from "./types";

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

    areCellsEmpty(...cells: Cell[]): boolean {
        return cells.reduce((result, cell ) => result && this.get(cell) === null, true )
    }

    renderBoard(): String {
        return "";
    }

    static create(initialPieceConfiguration: Piece[]): Board {
        return new Board(initialPieceConfiguration);
    }
}
