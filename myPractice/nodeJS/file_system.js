// const path = require('path')

// const abolute = path.resolve(__dirname, 'app')
// console.log(abolute)

// const {readFile, writeFile} = require('fs')

// const first = readFile('./content/first.txt', 'utf8')

// const result = writeFile('./content/result.txt', 'this is result module')

const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(first);

  writeFile("./content/result.txt", "this is the result", (err, result) => {
    if (err) {
      return;
    }
    console.log(result);
  });
});
