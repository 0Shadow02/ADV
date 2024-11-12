import { startLogger } from "./logger";
import { games } from "./store";

startLogger()

setInterval(() => {
    games.push({
        whitePlayer:"shadow",
        blackPlayer: "dark",
        moves:[]
    })
}, 5000);