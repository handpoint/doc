# Website

This documentation website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

Docusaurus is essentially a set of npm packages.
To be able to build the documentation framework locally we need to have [Node.js](https://nodejs.org/en/download/) version 14.13 or above.

It is also recommended, but not mandatory, to use [yarm](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

## Local Development

In the root folder we must execute the following commands:

```console
npm run start
```
or 
```console
yarn start
```
This command starts a local development server and opens up a browser window (by default localhost:3000). Most changes are reflected live without having to restart the server.

## Build
Docusaurus is a modern static website generator so we need to build the website into a directory of static contents and put it on a web server so that it can be viewed. To build the website:

```console
npm run build
```
or

```console
yarn build
```
**The search function will only work when this `build` command has been executed**

When the build is done, you can to test your build locally using:

```console
npm run serve
```


This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## Generate a new SDK version
Generate a new SDK version will autogenerate a folder with the docs that are currently in the selected folder.

Command to create a new version of Android SDK (e.g. version 6.8.0)

```console
npm run docusaurus docs:version:android "Android SDK 6.8.0"
```

`android` represents the folder where Android docs are. `"Android SDK 6.8.0"` is the name of the new version, it will appear as is on the documentation website
Automatically, it will create the new folder for this version (version-Android SDK 6.8.0) in `android_versioned_docs`. 

**To see it published you have to stop docusaurus and start it again**


## See a preview version before publishing
It is possible to see the result of a preview version before publishing it.
This version will appear with the name of `Next`.


To do this, in the file `docusaurus.config.js` we must change the value of the boolean property `includeCurrentVersion` to `true`.

The `includeCurrentVersion` property is located within the plugin `plugin-content-docs` of each module or SDK.

Example for Android case

```
[
  '@docusaurus/plugin-content-docs',
      {
        id: 'android',
        includeCurrentVersion: true,
        path: './android',
        routeBasePath: 'android',
        sidebarPath: require.resolve('./sidebarsAndroid.js'),
        sidebarCollapsed: false
      },
],
```

**Docusaurus will most likely need to be restarted for these changes to take effect.**