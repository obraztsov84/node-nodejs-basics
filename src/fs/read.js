import * as fs from 'fs';

const read = async () => {
    fs.readFile('src/fs/files/fileToRead.txt', 'utf8', (err, text) => {
        if (err) {
          console.error('FS operation failed');
          return;
        }
        console.log(text)
  })
}

await read();