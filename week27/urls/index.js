const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req, res)=>{
    const path = req.url
    const log = `this person req this url ${path} at this time ${Date.now()}\n`
    fs.appendFile("log.txt" ,log ,(err)=>{
        if (err) {
            console.log(err)
        }
    })
    const myPathlog = url.parse(path, true)
    console.log(myPathlog)
    switch (myPathlog.pathname) {
        case "/":
            res.end(`${JSON.stringify(myPathlog)}`)
            break;
        case "/about":
            const userdata= myPathlog.query
            res.end(`hey there my name is ${userdata.name} , I am ${userdata.age} years old `)
                break; 
        default:
            res.end(`${myPathlog}`)
            break;
    }
})

myServer.listen(8000, ()=> console.log("listening to the port 8000"))