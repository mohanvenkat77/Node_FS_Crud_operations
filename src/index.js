
const fileName=require('./file.txt')

const {myFileReader}=require('./app')
const {myFileWriter}=require('./app')
const {myFileUpdater}=require('./app')
const {myFileDeleter}=require('./app')

myFileReader("./file.txt")
myFileWriter("./file.txt","mohan")
myFileUpdater("./file.txt","mohan venkat Dasi")
myFileDeleter("./file.txt")