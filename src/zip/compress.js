import * as zlib from 'zlib';
import * as fs from 'fs';

const compress = async () => {
    fs.createReadStream('src/zip/files/fileToCompress.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('src/zip/files/archive.gz'))
};

await compress();