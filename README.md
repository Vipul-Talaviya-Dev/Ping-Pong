# Ping-Pong

## Preview

![gif preview](https://github.com/Vipul-Talaviya-Dev/Ping-Pong/blob/main/Ping-Pong.gif)

## Prerequisites
- [Node.js](https://nodejs.org) and npm 
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Running the project

- Install react-native-cli globally on your computer

```
npm install -g react-native-cli
```

- Clone this project
```
git clone https://github.com/Vipul-Talaviya-Dev/Ping-Pong.git
```

- Run `cd Ping-Pong/ `

- Run `npm install`.

### Android steps

- Go to your `Ping-Pong` Project then go to android directory Create a file with following name:

```
local.properties
```

- Open the file and paste your Android SDK path like below:

- For windows users:
```
sdk.dir=C:\\Users\\[UserName]\\AppData\\Local\\Android\\sdk
```

Replace `UserName` with your pc user name . Also make sure the folder is sdk or Sdk.

- For Mac users:
```
sdk.dir = /Users/[USERNAME]/Library/Android/sdk
```

Where `USERNAME` is your OSX username.

- For Linux (Ubuntu) users:
```
sdk.dir = /home/[USERNAME]/Android/Sdk
```

Where `USERNAME` is your linux username(Linux paths are case-sensitive: make sure the case of S in Sdk matches)

- Launch a virtual android device [(through *Android Studio* for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

- Then, run the project in executing on your project folder:

```
react-native run-android
```

- To run test `npm test`