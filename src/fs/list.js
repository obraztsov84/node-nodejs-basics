import * as fs from 'fs';

const list = async () => {
    fs.readdir('src/fs/fileds/', (err, files) => {
        if (err) {
            console.error('FS operation failed')
            return
        }
        console.log(files)
    });     
};

await list();