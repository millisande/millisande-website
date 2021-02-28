# Millisande Professional Portfolio

This is a portfolio website for Millisande Bath (author of the repo).

This was originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has subsequently been ejected but retains many of the original features (including commands).

## Prequisites 

In run, test and publish this repo you will need the following installed locally to your development device:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node](https://nodejs.org/en/)

## How to run locally

### Get set up

1. Clone the repo using git and navigate to the root level of the directory in a terminal/command line.
2. Run `npm install` to install required dependencies

### How to start the server

The application uses a simple server to allow for hot reloading of changes to the static files during development mode. To start this run in the root level of the directory

```
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Your terminal will display if there are linting errors preventing the loading of the page.


### How to view the UI elements

To support development work this repo includes a Storybook application which will show all reusable UI components in a simple web page. To start the storybook server run

```
npm run storybook
```

## How to publish changes

When you have finished editting the website and are ready to make the changes public you must first run the build command.

```
npm run build
```

Then you can add, commit and push all the changes to github using the git cli.

Github pages will host the updated pages. 

## Github pages integration advice

This repo demonstrates how you can use github pages to host react webpack developed static pages. Key to being able to do that involved making some changes to the originating bootstrapped React create-react-app commands. If you are interested in achieving the same with your own website you should follow these steps:

1. Generate a react website using the [Create React App](https://github.com/facebook/create-react-app) instructions

2. Eject the create-react-app utility libraries so that you can edit the underlying scripts

3. In the generated config > path edit line 74 so that it is set to: `appBuild: resolveApp('docs'),`

4. Make your edits, build the website and push the files you have changed to a github repo. In the repo settings, navigate to the Github pages section, choose to use the main branch and the docs folder as the source of the github pages website. 

5. If you are interested in using a custom domain you will need to provide a CNAME file with the custom domain name in the docs folder which is generated automatically on build. In order for the CNAME file to be included when the build command is initiated, the file should be added to the public folder of the repo. For more information about custom domains with github pages [this blog article was very helpful](https://medium.com/@JinnaBalu/godaddy-domain-with-github-pages-62aed906d4ef)

