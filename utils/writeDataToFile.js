const fs = require('fs');

function writeDataToFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (error) console.log(error);
    })
};

module.exports = {
    writeDataToFile
};