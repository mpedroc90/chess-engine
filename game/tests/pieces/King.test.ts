import { Color, cell } from "../../src/types";
import { Game } from "../../src/Game";
import { Bishop, Rook } from "../../src/pieces";
import { King, KingHasNotMoved, LongCastlePiecesHaveNotMoved, NoPiecesFromBtoD, NoPiecesFromFtoG, RookHasNotMoved, ShortCastlePiecesHaveNotMoved } from "../../src/pieces/King"


describe.each([
    [Color.White, 1],
    [Color.Black, 8]
]) ("Color: %s", (color, row) => {

    let game: Game
    let king: King
    let leftRook: Rook
    let rightRook: Rook

    beforeEach(()=> {
        game = Game.create([
            king = new King(color, cell(row, 5)),
            leftRook = new Rook(color, cell(row, 1)),
            rightRook = new Rook(color, cell(row, 8)),
        ]);
    });

    describe("Castle Rules" , ()=> {
        describe("King should not move" , () => {

            it("should return true if king has not been moved", () => {
                expect(KingHasNotMoved(king, game)).toBeTruthy()
            })

            it("should return false if King has been moved", () => {
                king.moveTo(cell(row, 6));
                expect(KingHasNotMoved(king, game)).toBeFalsy()
            })

            it("should return false if pieces is not a King", () => {
                king.moveTo(cell(row, 6));
                expect(KingHasNotMoved(leftRook, game)).toBeFalsy()
            })
        })
        
        describe("Rook should not move" , () => {

            it("should return true if rook has not been  moved", () => {
                expect(RookHasNotMoved(leftRook, game)).toBeTruthy()
            });
            
            it("should return false if rook has been moved", () => {
                leftRook.moveTo(cell(row, 7));
                expect(RookHasNotMoved(leftRook, game)).toBeFalsy()
            });

            it("should return false if the piece is not a rook", () => {
                expect(RookHasNotMoved(king, game)).toBeFalsy()
            });
        })

        it.todo("King is not in Check")
    })

    describe("Long Castle Rules" , () => {
        
        it("should have neither the king nor the rook moved", () => {
            expect(LongCastlePiecesHaveNotMoved(king, game)).toBeTruthy()
        });

        it("should return false if rook does not exits", () => {
            const game = Game.create([
                new King(color, cell(row, 5)),
            ]);
            const king = game.board.get(cell(row, 5))!!;
            expect(LongCastlePiecesHaveNotMoved(king, game)).toBeFalsy()
        });

    
        it("should return true if there are not pieces from C to D", () => {
            expect(NoPiecesFromBtoD(king, game)).toBeTruthy()
        });

        it("should return false if exists a piece from B to D", () => {
            game = Game.create([
                new King(color, cell(row, 5)),
                new Rook(color, cell(row, 1)),
                new Bishop(color, cell(row, 2)),
            ]);
            const king = game.board.get(cell(row, 5))!!;
            expect(NoPiecesFromBtoD(king, game)).toBeFalsy()
        });

        it.todo("should return false if there are at least one cell attack from B to D")
        
    });

    describe("Short Castle Rules" , () => {
        it("should have neither the white king nor the rook moved", () => {
            expect(ShortCastlePiecesHaveNotMoved(king, game)).toBeTruthy()
        });

        it("should return false if rook does not exits", () => {
            game = Game.create([
                new King(color, cell(row, 5)),
            ]);
            king = game.board.get(cell(row, 5))!!;
            expect(ShortCastlePiecesHaveNotMoved(king, game)).toBeFalsy()
        });

      
        it("should return true if there are not pieces from F to G", () => {
            expect(NoPiecesFromFtoG(king, game)).toBeTruthy()
        });

        it("should return false if there are not pieces from F to G", () => {
            game = Game.create([
                new King(color, cell(row, 5)),
                new Rook(color, cell(row, 8)),
                new Bishop(color, cell(row, 7)),
            ]);
            const king = game.board.get(cell(row, 5))!!;
            const rook = game.board.get(cell(row, 1))!!;
            expect(NoPiecesFromFtoG(king, game)).toBeFalsy()
        });

        it.todo("should return false if there are at least one cell attack from F to G")
        
    });
});