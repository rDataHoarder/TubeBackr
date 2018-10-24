# TubeBackr
### Hoard Videos - the easy way


##### Table of contents
* [Features](#features)
* [Download](#download)
* [Usage](#usage)
* [Config](#config)
* [Nice to Know](#nice-to-know)
* [RoadMap](#RoadMap)
* [Donations](#donations)
* [Contribute](#contribute)
* [Contact](#contact)

## Features
* Download Videos straight from your Browser - to your DataServer
* youtube-dl support
* Saving the videos structured
* custom Configuration
* Open Source

## Download
* Binary Releases for Win, macOS and Linux:
  - [Windows](following)
  - [macOS](following)
  - [Linux](following)
* You can also clone this and execute it directly from code
    - Clone with `git clone https://github.com/rDataHoarder/TubeBackr.git`

## Usage

##### Binary
1. Create a [config](#config) file and customize it
2. Create a folder named `bin` and paste your youtube-dl binary here (or a symlink)
2. Execute the binary
3. The Server listens on port 9999 (customs port not yet available on prebuilt versions)

##### Cloned Code
0. Install node (version 8 or newer) and npm. Execute `npm install` in the directory you cloned
1. Edit the [config](#config) so it fits your needs
2. Execute `node src/tubebackr.js` in the code root directory
3. The Server listens on port 9999
4. If you want to change the port, change it in the WebServer.js

## Config
```json
{
      "location": "./videos",
      "quality": "bestvideo+bestaudio",
      "additionalParams": "-k",
      "saveAllInfo": true,
      "saveOutput": true,
      "saveInSubfolders": true
}
```

### Explanation
|Key             |Description                          |
|:--------------:|:-----------------------------------:|
|location        |Where to save the videos             |
|quality         |Value after `-f` for ytdl            |
|additionalParams|Additional Parameters for youtube-dl |
|saveAllInfo     |save All Video Information in a file |
|saveOutput      |save youtube-dl output to a file     |
|saveInSubfolders|Create a subfolder for every YouTuber|

## Nice To Know
* The youtube-dl binary can be changed to upgrade/downgrade to another version
* It wont resume stopped / cancelled downloads right now
* There is no good way to see the progress right now

## RoadMap
* Serve a small API which gives Information about currently loading videos
* Show a progressbar
* Monitor YouTube Channels and automatically download new videos after they were uploaded
* Have a nice feature? Create an Issue!

## Donations
If you want to Donate something to me you can do this! This Software will stay free and can be used for free with all features!

|Service|Address|
|:-----:|:-----:|
|PayPal|https://paypal.me/dunklesToast|
|XMR|437UKc6vV9e7cpNz4xUQgNQPFcc67yGTRN54nqakoBYRQ3rm8KyLTBaW5QPyaLsV3mWy6gMTw5YzuQnZT6ecUmim3ihh8th|
|ETH|0xfC2d1090C2f61E4da2F554DA16F624A9638Ab1F9|
|BTC|17inewEz388x6W4ecudGhA2dJTt9Fy9qB7|

## Contribute
You want to contribute and...

###### ...know how to code?
Just create a Pull Request with your changes and I'll review!

###### ...don't know how to code?
Use the software, find bugs and tell us in the Issues tab or maybe you can create a Logo ^^


##### Contact
You can contact me on [Reddit](https://reddit.com/u/dunklesToast) or [Twitter](https://twitter.com/dunklesToast)