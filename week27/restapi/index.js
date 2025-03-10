const express = require("express")
const bodyParser =require("body-parser")
const fs = require("fs")
const users = require("./MOCK_DATA.json")

const app = express();
const port = 3000
app.use(bodyParser.json())
const num = 0
app.get("/users", (req,res)=>{
    const html = `
      <ol>
         ${users.map((user)=>
            `<li>${user.first_name}</li>`
         ).join("")}
      </ol>
    `
    res.send(html)
})
app.get("/api/users" , (req,res)=>{
    return res.json(users)
})
app.get("/api/users/:id",(req,res)=>{
    const id = req.params.id
    return res.json(users[id])

})

app.post("/api/users", (req, res)=>{
    const data = req.body
    fs.writeFileSync("./MOCK_DATA.json",(data,res)=>{
       if (err){
            return res.status(500).send("error writing file")
        }
    })
    console.log(body)
    res.send(users[1001])
})

app.listen(port, ()=>{console.log("listening to the port 3000")})