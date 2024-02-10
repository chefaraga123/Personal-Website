const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Define paths
const obsidianVaultPath = '../../Documents/Obsidian Vault'

const reactProjectDir = '/markdown_temp';

// Function to recursively copy directory
function copyDirectory(source, target) {
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
    }

    const files = fs.readdirSync(source);

    files.forEach((file) => {
        const sourcePath = path.join(source, file);
        const targetPath = path.join(target, file);

        if (fs.lstatSync(sourcePath).isDirectory()) {
            copyDirectory(sourcePath, targetPath);
        } else {
            fs.copyFileSync(sourcePath, targetPath);
        }
    });
}

// Copy Obsidian directory to React project directory
try {
    copyDirectory(obsidianVaultPath, reactProjectDir);
    console.log('Obsidian markdown files copied successfully.');
} catch (error) {
    console.error('Error copying Obsidian markdown files:', error);
}
