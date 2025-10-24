let process = require('process')

count = 0

for (i = 2; i<process.argv.length;i++){
    count += Number(process.argv[i])
}

console.log(count)
