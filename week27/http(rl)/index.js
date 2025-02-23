// const http = require('http')
// const fs = require('fs')

// const myserver= http.createServer((req,res)=>{
//     const log = `${Date.now()}: New req at ${req.url} recieved \n`
//     fs.appendFile("log.txt" , log , (err)=>{
//         switch (req.url) {
//             case "/":
//                 res.end("home page")
//                 break;
            
//             case "/dashboard":
//                 res.end("----welcome shadow---- ***")
//                 break;
//             case "/about":
//                 res.end("hey I am shadow , nice to meet you")
//                 break;

//             default:
//                 res.end("404 not found")
//                 break;
//         }
//     })

// })

// myserver.listen(8000,()=>console.log("listing to the port 8000"))


const http = require("http")
const fs = require("fs")
const os = require("os")

const myserver = http.createServer((req, res)=>{
    const logs = `Ispect from this page ${req.url} and Number of CPU cores: ${os.cpus().length}\n`
    fs.appendFile("inspect.txt" , logs,(err)=>{
        switch (req.url) {
            case "/home":
             res.end("welcome home")
                break;
            case "/settings":
             res.end("User settings\n Name = Shadow\n email = shadow@gmail.com\n 2factorAuth = true" )
                break;
            case "/contact":
             res.end("here is the contact link")
                break;
            default:
             res.end("Not found")
                break;
        }
    })
   
})

myserver.listen(8000, ()=> console.log("listning to the port 8000"))