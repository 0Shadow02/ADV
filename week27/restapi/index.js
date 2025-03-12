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
    users.push({...data , id: users.length + 1})
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
       if (err){
            return res.status(500).send("error writing file")
        }
    })
    res.send(users[1001])
})
app.patch("/api/users/:id", (req, res)=>{
    const id = parseInt(req.params.id); 
    const data = req.body; 

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        return res.status(404).send("User not found");
    }
    
    users[userIndex] = { ...users[userIndex], ...data };

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).send("Error writing file");
        }
        res.send("User updated successfully");
    });
})
app.delete("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id); // Get the ID from the request parameters

    // Find the index of the user with the given ID
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        return res.status(404).send("User not found"); // Handle case where user is not found
    }

    // Remove the user from the array
    users.splice(userIndex, 1);

    // Write the updated users array to the JSON file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).send("Error writing file");
        }
        res.send("User deleted successfully"); // Send a success response
    });
});

app.listen(port, ()=>{console.log("listening to the port 3000")})