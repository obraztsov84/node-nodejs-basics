import * as fs from 'fs';

const rename = async () => {
    fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', (err) => {
        if (err) {
            console.error('FS operation failed')
            return
        }
    })
};

await rename();