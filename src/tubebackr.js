/**
 * by: dunklesToast
 * created on: 10/23/18
 */
require('colors');

const prefix = `${('[').grey}${('Tube').white}${('Backr').red}${(']').grey} `;

global.console = {
    log: function (msg) {
        process.stdout.write(prefix + msg + '\n\r')
    },
    warn: function (msg) {
        process.stdout.write(prefix + msg.yellow + '\n\r')
    },
    error: function (msg) {
        process.stdout.write(prefix + msg.red + '\n\r')
    }
};


global.cfg = require('./readConfig');
console.log('Starting TubeBackr Version '.green + require('../package.json').version.blue + ' by'.green + ' dunklesToast'.blue);
require('./WebServer');