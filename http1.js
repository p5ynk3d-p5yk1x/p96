const http = require('http')

const server = http.createServer((req,res)=>{
    if( req.url === '/'){
        res.end('Home is where youre loved')
    }
    if( req.url === '/about'){
        res.end(`<h1>Tomorrow we'll jog for sure</h1>`)
    }
    res.end(`<h1>Bruh where the fuck you going</h1>`)
})
server.listen(5000)