const fs = require('fs')

console.log("code 1")
//  --> no code blocking
fs.readFile("text.txt" , "utf-8" ,(err, data)=>{
        console.log(data)
})
// console.log(data)
console.log("code 2")