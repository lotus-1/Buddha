const fs = require('fs');
const path = process.argv[2];
console.log('This is the process.argv[2]: ', process.argv[2]);

//The process.cwd() method returns the current working directory of the Node.js process.
fs.readFile(process.cwd()+"/"+path, (err, file) => {
  if(err) {
    process.stdout.write('There is an error');
  } else {
    process.stdot.write(file);
  }
})
