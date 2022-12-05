import * as zlib from 'zlib';
import * as fs from 'fs';

const decompress = async () => {
    fs.createReadStream('src/zip/files/archive.gz').pipe(zlib.createUnzip()).pipe(fs.createWriteStream('src/zip/files/fileToCompress.txt'))
};

await decompress();