const fs= require('fs')

// // reading a file
// let file_content=fs.readFileSync('hello.txt')
// console.log("output is"+file_content)

//writing
fs.writeFileSync('f2.txt',"hello i am vijay")

// append
fs.appendFile('f2.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
fs.unlink("hello.txt", function(err){
    if(err) throw err;
    console.log("deleted");
});