const http = require('http')
const fs = require('fs')

const myserver= http.createServer((req,res)=>{
    const log = `${Date.now()}: New req recieved \n`
    fs.appendFile("log.txt" , log , (err)=>{
        res.end("done!")
    })

})

myserver.listen(8000,()=>console.log("listing to the port 8000"))