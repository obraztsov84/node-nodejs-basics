import * as fs from 'fs'
import {Transform , pipeline} from 'stream'

const readable = process.stdin
const writable = process.stdout

const reverse = new Transform({
    transform(chunk,  func) {
        this.push(chunk.toString().trim().split().reverse().join() + '\n')
        func()
    }
})

const transform = async () => {
    // const input = fs.createReadStream('src/streams/files/fileToRead.txt', 'utf-8')
    const output = fs.createWriteStream('src/streams/files/fileToWrite.txt')


    // input.pipe()
    output.on.pipeline(
        readable,
        transform,
        writable
    )
};

await transform();