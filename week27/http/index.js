//  here we are going to learn about the file system module in nodejs
const fs = require("fs")

// --> write sync ..
//  fs.writeFileSync("./names.txt" , "shadow\ndark\n")

//  --> write async
// fs.writeFile("./contact.txt" , "email:\"shadow@gmail.com\" " , (err)=> console.log("error" , err))

// --> read sync ..
// const data = fs.readFileSync("./secrects.txt" , "utf8")
// console.log(data)

// --> read async ..
// fs.readFile("./secrects.txt" , "utf-8" , (err,data)=>{
//     if (err) {
//         console.log("err",err)
//     }
//     else {
//          console.log(data)
//     }
//   } )

// --> append sync ..
//   fs.appendFileSync("./names.txt", "ryuji\n")

// --> aapend async ..
  fs.appendFile("./contact.txt" , `email:\"dark@gmail.com\" created at ${new Date().getDate().toLocaleString()}\n` ,(err)=> console.log(err))


  console.log("done")