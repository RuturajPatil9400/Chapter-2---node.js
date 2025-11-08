const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})
rl.question('What is your name? ', name => {
  console.log(`Hi ${name}`)
  rl.question('Enter your age: ', age => {
    console.log(`Name: ${name}, Age: ${age}`)
    rl.close()
  })
})
