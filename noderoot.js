const { execSync } = require("child_process");

// get root folder of global node modules
const root = execSync("npm root -g")
  .toString()
  .trim();

console.log(root);
const chalk = require(`${root}/chalk`)
console.log(chalk);
// then we require global node modules as
// const axios = require(`${root}/axios`);
// const uuidv4 = require(`${root}/uuid/v4`);