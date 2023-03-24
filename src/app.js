const fs = require('fs/promises');
const fileName=require('./file.txt')
const myFileWriter = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent);
    console.log(`${fileName} has been created!`);
  } catch (error) {
    console.error(`Error creating ${fileName}: ${error}`);
  }
}

const myFileReader = async (fileName) => {
  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');
    console.log(`Content of ${fileName}: ${fileContent}`);
    return fileContent;
  } catch (error) {
    console.error(`Error reading ${fileName}: ${error}`);
    return null;
  }
}

const myFileUpdater = async (fileName, fileContent) => {
  try {
    const existingContent = await myFileReader(fileName);
    await fs.writeFile(fileName, existingContent + fileContent);
    console.log(`${fileName} has been updated!`);
  } catch (error) {
    console.error(`Error updating ${fileName}: ${error}`);
  }
}

const myFileDeleter = async (fileName) => {
  try {
    await fs.unlink(fileName);
    console.log(`${fileName} has been deleted!`);
  } catch (error) {
    console.error(`Error deleting ${fileName}: ${error}`);
  }
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
