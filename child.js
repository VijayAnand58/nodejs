const cp = require('child_process');
// cp.execSync('calc');
// cp.execSync("start msedge")
console.log(`output is:`+cp.execSync(`node demo.js`))