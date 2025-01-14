const {readFile} = require('fs');

const getText = (path) => {
    return new Promise((reslove, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err);
            } else{
                reslove(data);
            }
        })
    })
}

getText('./content/first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err))
