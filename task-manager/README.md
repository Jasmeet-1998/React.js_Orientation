****React Basics Level 2****

3520 timestamp
## Full stack backend(mock-json-server) with React UI

By- Jasmeet

****Level: Intermediate****

### Prerequisite:
- Javascript

  -- Data types,variables,function,loops

  -- Promise & asynchronous programming.

  -- Array methods forEach , of ,map

  -- fetch api & making http request
***
# Why Use React and The MVC(model view controller)

## Advantages of React

- Structure the view layer of the application.
- Reusable components with their own state.
- JSX(javascript syntax extension)- Dynamic markup embedded javascript expression in html.
- Interactive UI's with Virtual DOM.
- Performance and testing.
- popular in the Industry.

## Model View Controller

#### A popular design pattern for software development.

#### Model deals with Data
#### Controller deals with the request & routing
#### View is the UI part of the app the user sees.

### React is the View part in the MVC

***

# Function based components And hooks

- Components render or return JSX.
- Components can  also take props.

Below title is prop and Header is Component.

***<*Header title="my title"*/>***

## Working With State

- ****Components can have state which is  an object that determines how a component renders and behaves.****

- ***App or global state refers to the state that is available to entire UI not just single component.****

- ****Earlier(before React 16.8) to use state class Based components were used.
now we can use functional components with hooks.****


## React hooks

- hooks are functions that hooks into the React  state and lifecycle features from functional component.

### useState - returns a stateful value and function to update it.

### useEffect - perform sideeffects in functional component.

### useContext, useReducer, useRed - Advance topics of React.

#### We can also create custom hooks

# Some Important Stuff

#### Note only a single parent element can be returned in a component i.e everything must be wrapped inside a single parent element i.e <> </>

#### {} can be used to embed javascript in html tags like

   ***const name="Wagru"; <*h1>Hi {name}</h1*>***

#### we can import component and then just place in the App as XML tags. See App.js in the src folder.

## Component Props
***<*Header title="my title"*/>***

#### title is a prop and in the Header.js inside components src directory we pass the props parameter in the arrow function to access this prop.

****==============================Intro Ends Here===============================****


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)