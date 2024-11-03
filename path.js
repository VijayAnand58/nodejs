const pt = require("path");

console.log(pt.extname("C:\Users\\vijay\Documents\Programming\Front End programms\Java Script Programs\nodejs\hello.txt".replaceAll("\\","\\\\")))
console.log(pt.basename("C:\Users\\vijay\Documents\Programming\Front End programms\Java Script Programs\nodejs\hello.txt".replaceAll(/\\/g, "\\\\")))
