const fs = require('fs');
const path = require("path");

const prompt = require('prompt-sync')();
let flag = 1;

while(flag) {

    console.log('\nPlease type these commands to perform the following operations');
    console.log('---------------------------------'); 
    console.log(' 1  -> READ FILE '); 
    console.log(' 2  -> CREATE FILE'); 
    console.log(' 3  -> UPDATE FILE'); 
    console.log(' 4  -> APPEND FILE'); 
    console.log(' 5  -> DELETE FILE'); 
    console.log(' 6  -> RENAME FILE'); 
    console.log(' 7  -> CREATE FOLDER'); 
    console.log(' 8  -> READ FOLDER'); 
    console.log(' 9  -> RENAME FOLDER'); 
    console.log(' 10 -> DELETE FOLDER'); 
    
    console.log(' 0 -> EXIT'); 
    console.log('---------------------------------  \n');


    const operationNumber = prompt("Enter the operation number : ");



    if(operationNumber === `1`) {
        const filePath = prompt("Please provide the file name to read:");
        const outputData = fs.readFileSync(path.join(__dirname,`${filePath}`),'utf-8');
        console.log(outputData);
        console.log("Read file done successfully.");
    }

    else if(operationNumber === `2`) {
        const filePath = prompt("Please provide the file name you want to create : ");
        const fileData = prompt("Enter the file data content  : ")
        fs.writeFileSync(path.join(__dirname,`${filePath}`),fileData);
        console.log("\nCreated the file with provided data content");

    }

    else if(operationNumber === `3`) {
        const filePath = prompt("Please provide the file name where you want to update: ");
        const fileData = prompt("Enter the modified file data content  : ")
        fs.writeFileSync(path.join(__dirname,`${filePath}`),fileData);
        console.log("\nUpdated the file successfully");

    }

    else if(operationNumber === `4`) { 
        const filePath = prompt("Please provide the file name where you want to append : ");
        const fileData = prompt("Enter the file data content to be appended : ")
        fs.appendFileSync(path.join(__dirname,`${filePath}`),fileData);
        console.log("\nAppended the provided data successfully");

    }

    else if(operationNumber === `5`) {
        const filePath = prompt("Please provide the file name to be deleted : ");
        fs.unlinkSync(path.join(__dirname,`${filePath}`));
        console.log("\nDeleted the mentioned file successfully");

    }

    else if(operationNumber === `6`) {
        const oldPath = prompt("Please provide the old file name  : ");
        const newPath = prompt("Please provide the new(Updated) file name  : ");
        fs.renameSync(path.join(__dirname,`${oldPath}`),path.join(__dirname,`${newPath}`));
        console.log("\nRenamed the mentioned file successfully");

    }

    if(operationNumber === `7`) {
        const folderName = prompt("Please provide the Folder name you want to create:");
        fs.mkdirSync(path.join(__dirname, `${folderName}`));
        console.log("Created folder successfully.");

    }

    else if(operationNumber === `8`) {
        const folderName = prompt("Please provide the Folder name you want to Read:");
        const fileInside = fs.readdirSync(path.join(__dirname,`${folderName}`));
        console.log(" The folder has given files\n");
        console.log(fileInside);

    }

    else if(operationNumber === `9`) {
        const oldFolderName = prompt("Please provide the old folder name  : ");
        const newFolderName = prompt("Please provide the new(Updated) folder name  : ");
        fs.renameSync(path.join(__dirname,`${oldFolderName}`),path.join(__dirname,`${newFolderName}`));
        console.log("Renamed folder successfully");

    }

    else if(operationNumber === `10`) {
        const folderName = prompt("Please provide the folder name to be deleted: ");
        fs.rmdirSync(path.join(__dirname,`${folderName}`))
        console.log("Deletd folder successfully");
    }


    else if(operationNumber === `0`){
        flag = 0;
    }


}

    

