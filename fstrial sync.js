const {readFileSync , writeFileSync } = require('fs')
const f = readFileSync('./content/subfolder/first.txt', 'utf8')
const s = readFileSync('./content/subfolder/second.txt', 'utf8')

writeFileSync('./content/subfolder/result.txt', ` ${f}, ${s}`)

console.log(readFileSync('./content/subfolder/result.txt', 'utf8'))

writeFileSync('./content/subfolder/result.txt', 'bruh', {flag : 'a'})
console.log(readFileSync('./content/subfolder/result.txt' , 'utf8'))

