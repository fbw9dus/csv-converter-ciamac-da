const fs = require('fs')
const logger = fs.createWriteStream('user.log') //ke dade haro ba yekam takhir kam kam ezafe mikone

process.stdin
.setEncoding('utf-8')
.on('data',data =>{
      if(data.trim() == "exit") process.exit() //how to exit the programm
      if(data.trim() == "showall"){ //when you write showall you can get all saved datas
            fs.readFile('user.log', (error,data)=>{
                  console.log(data.toString())
            })
      } else{ 
      //fs.appendFile('user.log', data, () =>{
        //    console.log('saved',data)
      //})
        logger.write(data)          
      }
})
//process.on('exit', data => { process.exit('exit'); });
