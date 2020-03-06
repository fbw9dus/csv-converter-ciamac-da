process.stdin
.setEncoding('utf-8')
.on('data', data => {
      process
      console.log('You typed:',data)
})