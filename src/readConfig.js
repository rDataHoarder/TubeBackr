/**
 * by: tom
 * created on: 10/23/18
 */
const path = require('path');
const fs = require('fs');
let cfgPatj = path.join(process.cwd() + '/config.json');
const cfg = JSON.parse(fs.readFileSync(cfgPatj).toString());

console.log('Searching for config in '.green + path.join('./config.json').blue);

function get(field) {
    return cfg[field];
}


module.exports = {
    get: get
};