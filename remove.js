const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

function removeAllFilesInDirectory(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        if (files.length === 0) {
            console.log('No log files found to remove.');
            return;
        }

        console.log('Files to delete:');
        files.forEach((file) => {
            const filePath = path.join(directory, file);
            console.log(filePath);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(`Error deleting file ${filePath}:`, err);
                } else {
                    console.log(`Deleted file: ${file}`);
                }
            });
        });
    });
}

function removeLogsDirectoryIfExists() {
    if (fs.existsSync(logsDirectory)) {
        fs.rmdir(logsDirectory, { recursive: true }, (err) => {
            if (err) {
                console.error('Error removing Logs directory:', err);
            } else {
                console.log('Logs directory removed.');
            }
        });
    } else {
        console.log('Logs directory does not exist.');
    }
}

removeAllFilesInDirectory(logsDirectory);
removeLogsDirectoryIfExists();
