const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/inndex.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'file created'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) =>{
        fs.copyFile('./src/style.css', './dist', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'file created'
            });
        });
    });
};

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};
