import * as fs from 'fs';

const copy = async () => {
    const pathFrom = 'src/fs/files'
    const pathTo = 'src/fs/files_copy'
    // if (!fs.readdir(pathFrom, (err) => {}) || fs.readdir(pathTo, (err) => {})) {
    //     console.error('FS operation failed')
    //     return
    // }
    fs.copyFile(pathFrom, pathTo, fs.constants.COPYFILE_EXCL, (err) => {
        if (err) console.error('FS operation failed')
        console.log("success")
    })
};

await copy();
