const {readFile, readFileSync, writeFile} = require('fs')

readFile('./content/subfolder/first.txt','utf8',(e,r)=>{
    if(e){
        console.log(e)
        return;
    }
    const f = r
    readFile('./content/subfolder/second.txt','utf8',(e,r)=>{
        if(e){
            console.log(e)
            return;
        }
        const s = r
        
        writeFile('./content/subfolder/resulta.txt',`result a : ${f} ${s}`,(e,r)=>{
            if(e){
                console.log(e)
                return;
            }
            console.log(readFileSync('./content/subfolder/resulta.txt','utf8'))
            
        })
    })
    
})