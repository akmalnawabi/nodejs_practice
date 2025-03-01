const os = require("os");
const user = os.userInfo();

console.log(user);
// console.log(`system uptime is ${os.uptime()} sec`)

const myPc = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(myPc);
