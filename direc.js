const fs= require('fs')

// fs.mkdirSync("hello")

let readfile=`C:\\Users\\vijay\\Documents\\Programming\\Front End programms\\Java Script Programs\\nodejs\\hello`
let read_direc=fs.readdirSync(readfile)
console.log("files are =>"+read_direc)

let doese=fs.existsSync("hello")
console.log(doese)

fs.rmdirSync('hello',{recursive:true,force:true})