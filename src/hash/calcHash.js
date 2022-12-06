import { readFileSync } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const file = readFileSync('src/hash/files/fileToCalculateHashFor.txt', 'utf8', (err, text) => {
        if (err) {
          console.error('FS operation failed');
          return;
        }
        console.log(text)
  })
    
    console.log(createHash('sha256').update(file).digest('hex'))
};

await calculateHash();