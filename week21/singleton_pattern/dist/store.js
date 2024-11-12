"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.game = [];
        this.game = [];
    }
    static getInstance() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return GameManager.instance;
    }
    addMove(gameId, move) {
        console.log(` Adding move ${move} to game ${gameId}`);
        const game = this.game.find(game => game.gameId = gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const Game = {
            gameId: gameId,
            whitePlayer: "shadow",
            blackPlayer: "dark",
            moves: []
        };
        this.game.push(Game);
    }
    log() {
        console.log(this.game);
    }
}
exports.GameManager = GameManager;
exports.gameManager = GameManager.getInstance();
