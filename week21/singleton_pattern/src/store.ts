interface Game {
    gameId : string
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
     game :Game[] = []
     private static instance :GameManager
     private constructor(){
        this.game=[]
     }

     static getInstance(){
        if(GameManager.instance){
            return GameManager.instance
        }
        GameManager.instance = new GameManager()
        return GameManager.instance
     }

     addMove(gameId: string,move:string){
        console.log(` Adding move ${move} to game ${gameId}`)
        const game = this.game.find(game=>game.gameId= gameId)
        game?.moves.push(move)
     }

     addGame(gameId:string){
        const Game = {
            gameId : gameId,
            whitePlayer:"shadow",
            blackPlayer: "dark",
            moves:[]
        }
        this.game.push(Game)
     }

     log(){
        console.log(this.game)
     }
}

export const gameManager = GameManager.getInstance()