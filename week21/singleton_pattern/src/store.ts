interface Game {
    gameId : string
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
     game :Game[] = []
     constructor(){
        this.game=[]
     }

     addMove(gameId: string,move:string){
        console.log(` Adding move ${move} to game ${gameId}`)
        const game = this.game.find(game=>game.gameId= gameId)
        game?.moves.push(move)
     }

     addGame(gameId:string){
        const Game = {
            id : gameId,
            whitePlayer:"shadow",
            blackPlayer: "dark",
            moves:[]
        }
     }

     log(){
        console.log(this.game)
     }
}

export const gameManager = new GameManager()