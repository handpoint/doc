# Handpoint Documentation Website

This is the source code for the [Handpoint Documentation website](https://developer.handpoint.com/). The site is built using [Docusaurus 2](https://docusaurus.io/).

## Local Development

### Requirements

To build the site locally, you will need to have the following installed:
- [Node.js](https://nodejs.org/en/) version 18 or above
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [Docusaurus](https://docusaurus.io/)

### Installing Node 18

If you don't have Node 18 installed, you can use **Node Version Manager**, also known as [nvm](https://github.com/nvm-sh/nvm) to install it. Nvm is a bash script that allows you to manage multiple versions of Node.js on your machine. It is a great tool for developers who need to switch between different versions of Node.js for different projects.

To install nvm, you can use the following command:

```shell
brew install nvm
```

Once installed, you should create NVM's working directory if it doesn't exist:

```shell
mkdir ~/.nvm
```

Additionally, add the following lines to your shell profile e.g. ~/.profile or ~/.zshrc:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

After installing nvm, you can install Node 18 by running the following command:

```shell
nvm install 18
```

To verify it was installed correctly, you can check the version of Node.js by running:

```shell
node -v
```

Once Node 18 is installed, you can set it as the default version by running:

```shell
nvm alias default 18
```

### Installing NPM

NPM (Node Package Manager) is included with Node.js, so you don't need to install it separately. However, if you want to update it to the latest version, you can run:

```shell
npm update -g npm
```

### Installing Yarn

Yarn is a package manager used to manage dependencies in JavaScript projects. It is an alternative to npm and is known for its speed and reliability.

To install Yarn, you can use the following command:

```shell
npm install --global yarn
```

### Install dependencies with Yarn

To install the project dependencies, move to the root folder of the project and run:

```shell
yarn install
```

### Build and Run the Site locally

In the root folder we must execute the following commands:

```console
yarn start
```

This command starts a local development server and opens up a browser window (by default **localhost:3000**). Most changes are reflected live without having to restart the server.

Closing the browser window or the tab will stop the server. You can also stop the server by pressing `Ctrl + C` in the terminal.

## How the documentation is organized

Documentation is mainly organized in folders, classified by every SDK type available for Handpoint integrators:

- `android`: Android SDK
- `express`: Express SDK
- `ios`: iOS SDK
- `javascript`: Javascript SDK
- `restapi`: REST API
- `windows`: Windows SDK

Every one of the above folders is replicated in their own `versioned_docs` and `versioned_sidebars` folders. This is where the versioned documentation is stored.

For example, the Android SDK version 6.7.0 related documentation can be found in two places:

- `android_versioned_docs/version-Android SDK 6.7.0`: Documentation.
- `android_versioned_sidebars/version-Android SDK 6.7.0-sidebars.json`: Sidebar configuration.

Additionally to these folders, there are other folders that are used for the website:

- `blog`: Blog entries.
- `docs`: Documentation not directly related with SDKs (for example FAQs and introduction).
- `src`: Source code for the website (CSS, search bar, etc).
- `static`: Static files (images, etc).
- `txnfeedapi`: Transaction feed API documentation.
- `versioned_docs`: Versioned documentation of the tutorial.
- `versioned_sidebars`: Versioned sidebar configuration of the tutorial.

## How to use Docusaurus with NPM

Docusaurus is a static site generator that allows you to create documentation websites easily. It uses React and Markdown to create a fast and customizable documentation site.

To run docusaurus, just run the following command in the root folder of the project:

```console
npm run docusaurus <command>
```

### Docusaurus commands and options

```console
Usage:  <command> [options]

Options:
  -V, --version                                            output the version number
  -h, --help                                               display help for command

Commands:
  build [options] [siteDir]                                Build website.
  swizzle [options] [themeName] [componentName] [siteDir]  Wraps or ejects the original theme files into website folder for customization.
  deploy [options] [siteDir]                               Deploy website to GitHub pages.
  start [options] [siteDir]                                Start the development server.
  serve [options] [siteDir]                                Serve website locally.
  clear [siteDir]                                          Remove build artifacts.
  write-translations [options] [siteDir]                   Extract required translations of your site.
  write-heading-ids [options] [siteDir] [files...]         Generate heading ids in Markdown content.
  docs:version <version>                                   Tag a new docs version
  docs:version:ios <version>                               Tag a new docs version (ios)
  docs:version:javascript <version>                        Tag a new docs version (javascript)
  docs:version:restapi <version>                           Tag a new docs version (restapi)
  docs:version:windows <version>                           Tag a new docs version (windows)
  docs:version:express <version>                           Tag a new docs version (express)
  docs:version:android <version>                           Tag a new docs version (android)
```

## <a name="generate-a-new-sdk-version"></a> Generate a new SDK version
Generate a new SDK version will autogenerate a folder with the docs that are currently in the selected folder.

Command to create a new version of Android SDK (e.g. version 6.8.0)

```console
npm run docusaurus docs:version:android "Android SDK 6.8.0"
```

`android` represents the folder where Android docs are. `"Android SDK 6.8.0"` is the name of the new version, it will appear as is on the documentation website
Automatically, it will create the new folder for this version (version-Android SDK 6.8.0) in `android_versioned_docs`. 

**To see it published you have to stop docusaurus and start it again**

## Deployment

The deployment is done automatically with Github Actions. The workflow is defined in `.github/workflows/deploy.yml`:

- Every time a PR is merged to `dev` branch, changes are deployed to https://developer.handpoint.io
- Every time a PR is merged to `main` branch, changes are deployed to https://developer.handpoint.com

The property `includeCurrentVersion` in `docusaurus.config.js` is set to `true` for `dev` branch and `true` for `main` branch. This is done to avoid having unfinished releases in the production website. 

**IMPORTANT**: If you are about to release the doc for a new version, make sure you follow the steps in the section [Generate a new SDK version](#generate-a-new-sdk-version) before merging to `main` branch.

More info about this CI/CD pipeline can be found [here](https://handpoint.atlassian.net/wiki/spaces/DP/pages/3598450735/Documentation+Site).

## CI/CD

The documentation site consists of two [docusaurus](https://docusaurus.io/) instances:

- [Card present documentation](https://developer.handpoint.com/)
- [Card not present documentation](https://developer-ecomm.handpoint.com/)

The documentation site follows [Gitflow strategy](https://docs.google.com/document/d/1nRKUXhPKga-UJ-UxXKYdssa9rKlyClNRfxM6J4fw11s/edit#heading=h.wy5fcj5rh5j6). The `main` branch is the production branch and the `dev` branch is the development/staging branch. 

The `dev` branch is deployed to:

- [https://developer.handpoint.io](https://developer.handpoint.io) 
- [https://developer-ecomm.handpoint.io](https://developer-ecomm.handpoint.io) 

and the `main` branch is deployed to:
 
- [https://developer.handpoint.com](https://developer.handpoint.com) 
- [https://developer-ecomm.handpoint.com](https://developer-ecomm.handpoint.com) 

Documentation changes can be developed locally and tested in the staging environment before being released to production.
Every time we want to integrate changes from a feature branch to the `dev` branch, we have to create a PR. The PR will be reviewed by one of the team members and merged to `dev` branch. This will trigger a deployment to the staging environment (It can take up to 5 minutes to be deployed). 

If you are writing documentation for a new version, you have to follow the steps in the section [Generate a new SDK version](#generate-a-new-sdk-version) before merging to `main` branch.

Once the changes are tested in the staging environment, another PR has to be created to merge the changes from `dev` branch to `main` branch. This PR will be reviewed by two team members and merged to `main` branch. This will trigger a deployment to the production environment (It can take up to 5 minutes to be deployed).

