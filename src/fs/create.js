import * as fs from 'fs';


const create = async () => {
    if (fs.existsSync('src/fs/files/fresh.txt')) {
        console.error('FS operation failed')
        return
    }
    fs.open('src/fs/files/fresh.txt', 'w', (err) => {
        if (err) console.error(err)
    })
    fs.appendFile('src/fs/files/fresh.txt', 'I am fresh and young',(err) => {
        if (err) console.error(err)

    })


};

await create();