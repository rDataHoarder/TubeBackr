/**
 * by: tom
 * created on: 10/23/18
 */

const youtubedl = require('./youtube-dl/lib/youtube-dl');
const cp = require('child_process');
const fs = require('fs-extra');


async function download(url) {
    try {
        youtubedl.getInfo(url, function (err, info) {
            const fileName = generateFileNameData(info);

            console.log('Saving as: '.green + `${cfg.get('location')}/${fileName.folder}/${fileName.filename}.`.blue);

            fs.ensureDirSync(`${cfg.get('location')}/${fileName.folder}`);


            // Very small injection protection
            url = url.replace(/"/, '');

            const cmd = `"youtube-dl" -f ${cfg.get('quality')} -o "${cfg.get('location')}/${fileName.folder}/${fileName.filename}" ${cfg.get('additionalParams')} "${url}"`;

            cp.exec(cmd, function (error, stdout, stderr) {
                if(error){
                    console.log('Error while loading the video.'.red);
                    throw error;
                }
                const ts = Math.round((new Date()).getTime() / 1000);
                if(cfg.get('saveOutput')){
                    stdout = cmd + '\r\n\r\n' + stdout;
                    stderr = cmd + '\r\n\r\n' + stderr;
                    fs.writeFileSync(`${cfg.get('location')}/${fileName.folder}/${fileName.filename}_${ts}_logs.txt`, stdout);
                    fs.writeFileSync(`${cfg.get('location')}/${fileName.folder}/${fileName.filename}_${ts}_error.txt`, stderr);
                }
                if(cfg.get('saveAllInfo')){
                    fs.writeFileSync(`${cfg.get('location')}/${fileName.folder}/${fileName.filename}_${ts}_info.json`, JSON.stringify(info));
                }
                console.log('Finished processing of '.green + url.blue)
            })
        });
    }catch (e){
        throw e;
    }
}

function generateFileNameData(info) {

    let name = `${info.uploader} - ${info.upload_date} - ${info.fulltitle}`;

    return {
        folder: cfg.get('saveInSubfolders') ? info.uploader : '',
        filename: name
    }
}

module.exports = download;