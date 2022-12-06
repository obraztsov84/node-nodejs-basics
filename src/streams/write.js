import * as fs from 'fs'
import { read } from 'src/streams/read.js'

const write = async () => {
    //Не очень понял что тут делать, поэтому читаю один файл и пишу в другой

    const input = fs.createReadStream('src/streams/files/fileToRead.txt', 'utf-8')
    const output = fs.createWriteStream('src/streams/files/fileToWrite.txt')

    input.on('data', chunk => output.write(chunk));
};

await write();