const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

function createDirectoryIfNotExists(directory) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }
}

function createLogFiles() {
    createDirectoryIfNotExists(logsDirectory);
    process.chdir(logsDirectory);

    const logFileNames = [];
    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        logFileNames.push(fileName);

        const content = `Log file ${i}: This is some sample text.`;
        fs.writeFileSync(fileName, content);
    }

    return logFileNames;
}

const createdLogFiles = createLogFiles();
console.log('Log files created:');
createdLogFiles.forEach((fileName) => {
    console.log(fileName);
});
