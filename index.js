const fs = require('fs')
const path = require('path')
const util = require('util')
const csvtojson=require('csvtojson')
const writeFile = util.promisify(fs.appendFile)
const args = process.argv.slice(2)
console.log(args)
const absSourcePath = path.resolve(args[0])
const targetFileName = args [1] || path.parse(absSourcePath).name + '.json'

if(args.lenght <1){
      console.erroe('Please provide a csv file to convert to JSON')
      process.exit()
}

convert(args[0])


async function convert(csvFilePath){
      const jsonArray = await csvtojson().fromFile(csvFilePath);
      savefile(JSON.stringify(jsonArray))
}

async function savefile(content){
      try {
await writeFile(path.join(__dirname,targetFileName), content)
console.log(`saved file at  ${targetFileName}`)
      }catch (error){
            console.log(`Something went wrong, Could not write json to : ${targetFileName}`)
      }
}