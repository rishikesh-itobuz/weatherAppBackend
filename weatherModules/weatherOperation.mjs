import { dataBase } from "./weatherDb.mjs";
import * as fs from "node:fs";

const filePath = new URL("weatherDb.txt", import.meta.url);

function createDb(countryName, tempValue, feelsValue) {
  dataBase.push({
    location: countryName,
    temp: tempValue,
    feelsLike: feelsValue,
  });
  fs.writeFileSync(filePath, JSON.stringify(dataBase));
}

function deleteDb(countryName) {
  for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].location === countryName) {
      dataBase.splice(i, 1);
    }
  }
  fs.writeFile(filePath, JSON.stringify(dataBase), (err) => {
    console.log("Deleted Successfully");
  });
}

function updateDb(countryName, newTemp, newFeelsValue) {
  for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].location === countryName) {
      dataBase[i].location = countryName;
      dataBase[i].temp = newTemp;
      dataBase[i].feelsLike = newFeelsValue;
    }
  }
  fs.writeFile(filePath, JSON.stringify(dataBase), (err) => {
    console.log("Updated Successfully");
  });
}

function readDb() {
  fs.readFile(filePath, "UTF-8", (err, data) => {
    console.log(data);
  });
}

createDb("india", 33, 30);
createDb("russia", 3, 2);
createDb("usa", 8, 7);
createDb("nepal", 23, 21);
createDb("japan", 13, 12);

export { createDb, deleteDb, updateDb, readDb };
