Shreddit - Kitchen sink with ES6 and ReactJS

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Table of Contents

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)

- [TODOs](#todos)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## TODOs

Technologies to make use of:

- [x] Ajax (axios)
- [ ] Local caching
- [ ] WebGL
- [ ] Websockets
- [ ] Service workers
- [ ] Web workers
- [ ] Database storage
- [ ] Speech Synthesis
- [ ] Web notifications
- [ ] P2P
- [x] Content security policy

## Pitfalls:

* Node server must be listening to port 3000 due to content security policy, as connect-src 'self' doesn't work with web sockets
