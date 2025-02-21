const http = require('http')
const fs = require('fs')

const myserver= http.createServer((req,res)=>{
    const log = `${Date.now()}: New req at ${req.url} recieved \n`
    fs.appendFile("log.txt" , log , (err)=>{
        switch (req.url) {
            case "/":
                res.end("home page")
                break;
            
            case "/dashboard":
                res.end("----welcome shadow---- ***")
                break;
            case "/about":
                res.end("hey I am shadow , nice to meet you")
                break;

            default:
                res.end("404 not found")
                break;
        }
    })

})

myserver.listen(8000,()=>console.log("listing to the port 8000"))