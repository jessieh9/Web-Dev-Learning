const fs = require("fs");

// console.log("Writing to file.");
// fs.writeFile("message.txt", "Using NodeJS - Jessie", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

console.log("Reading from file");
fs.readFile('./message.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 