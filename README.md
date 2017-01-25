# atom-shell-activitykit

visualize android activity stack. Based on [d3](http://d3js.org) & [activitykit](https://github.com/chitacan/activitykit) & [electron](https://github.com/atom/electron)

![](https://dl.dropbox.com/s/xgur0l5joiengp7/atom-shell-activitykit.gif)

## requirements

* Android SDK (especially `adb`)
* Android supported device or emulator (tested on >= 4.4)
* [node.js](https://nodejs.org/)

## run

```sh
$ sudo npm install -g electron-prebuilt
$ sudo npm install -g bower
```

In case of possible problems with proxy, you can try to modify the git config file
```sh
$ git config --global url."https://".insteadOf git://
```

```sh
$ git clone https://github.com/chitacan/atom-shell-activitykit
$ cd atom-shell-activitykit
$ npm install
$ electron app
```
