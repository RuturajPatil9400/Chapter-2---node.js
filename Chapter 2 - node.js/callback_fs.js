const fs = require('fs')
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading sample.txt', err)
    process.exit(1)
  }
  console.log('Contents of sample.txt:')
  console.log(data)
})
