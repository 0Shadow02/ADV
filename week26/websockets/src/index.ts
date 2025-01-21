import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});
let senderSocket : null | WebSocket = null;
let receiverSocket : null | WebSocket = null;

wss.on('connection', function connection(ws){
      ws.on('message',function message(data:any){
        const message = JSON.parse(data);
        if (message.type === "identify-as-sender"){
            senderSocket = ws;
        } else if (message.type ==="identify-as-receiver") {
            receiverSocket = ws
        } else if (message.type === "create-offer") {
            
        } else if (message.type === "receiver-offer"){
            
        }

      })
})