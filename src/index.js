const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  const data = await fs.writeFile(fileName, fileContent, (err) => {
    if (err) return err;
  });
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  const data = await fs.readFile(fileName , { encoding: "utf-8" } , (err, data) => {
      if (err) return err;
      return data;
    }
  );
  // console.log(data);
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  await fs.appendFile(fileName, fileContent, (err) => {
    if (err) throw err;
  });
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  await fs.unlink(fileName, (err) => {
    if (err) throw err;
  });
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };

/******Test Case-1*****/
myFileWriter("file.txt", "Hello ");
// myFileDeleter("file.txt");
// myFileReader("file.txt");
myFileUpdater("file.txt", "World");
myFileReader("file.txt");

/******Test Case-21*****/
myFileWriter("new file.txt", "Welcome to ");
// myFileDeleter("file.txt");
// myFileReader("file.txt");
myFileUpdater("new file.txt", "Node.js");
myFileReader("new file.txt");
