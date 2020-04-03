<<<<<<< HEAD
=======
# SEA INFO-6150 Final Project

Link to final project assignment: https://github.com/aprilbingham-neu/seainfo6150/blob/master/assignments/final-project.md

<hr>

# Github instructions

## Project repo
https://github.com/SEAINFO6150/seainfo6150-final-project-haiwei-liu

## Forking and cloning repo and adding upstream
1. Go to the team git repo for your team from above
2. Click “Fork” to create your copy of the repo
3. Click “Clone or download” to get a link to copy your fork on your computer
4. Click “Use HTTPS”
5. Copy link
6. Open command line/terminal window and use these commands in a directory where you have admin permissions
```
git clone [copied link]
cd seainfo6150-final-project-haiwei-liu
git remote add upstream https://github.com/SEAINFO6150/seainfo6150-final-project-haiwei-liu
```

## Pulling latest changes from team repo
```
git pull upstream master
```

## Saving, committing and pushing your changes to your fork
1. Make changes in your fork
2. Open command line and use these commands inside your final project directory
```
git add .
git commit -m “[commit name]”
git push origin master
```
**You should make a habit of pulling from the team repo often in order to get the latest changes from your teammates. Failure to pull increases the chances of creating merge conflicts and code collisions.**

## Pushing your changes directly to team repo
1. Open command line and use this command inside your final project directory
```
git push upstream master
```

## Creating a pull request
Creating pull requests assures your team that code isn't being overwritten accidentally and keeps everyone aware of the code that is changing. Teammates should review, approve and merge each others' code.
1. Go to the team git repo for your team from above
2. Click "New pull request"
3. Click "compare across forks" in the top paragraph.
4. Leave base repository as-is, and choose your fork in the "head repository" dropdown. Leave both branch dropdowns as "master" unless you have created a branch for your work. 
5. Verify that the code is able to merge (there are no merge conflicts). If so, click "create pull request". 

## Resolving merge conflicts
If the code is not able to merge, it's most likely because there is a merge conflict -- you need to
1. Pull from the team repo to get the latest code 
2. Find out what code is in conflict
3. Resolve the conflict by reconciling the differences
4. Save, commit and push the changes to your fork
5. Try your pull request again
<hr>

>>>>>>> fd368db32a332e89a28703c08c400d69ae35674b
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

<<<<<<< HEAD
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
### `npm install`
Runs the install scripts to gather and install all dependent modules into node_modules. **You must do this once before you run the app for the first time.**

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
>>>>>>> fd368db32a332e89a28703c08c400d69ae35674b
