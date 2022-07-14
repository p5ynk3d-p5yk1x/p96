const os = require('os');
const inf = os.userInfo();
const osinf = {
    name : os.type(),
    release: os.release(),
    toatlmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(osinf)
console.log(`The system uptime is ${os.uptime()}`)