# Interview Scheduler
Date October 26 - Nov 4, 2020
Week 7-8 Lighthouse Labs Web Development Bootcamp

### Summary 
Built and tested a React application that allows users to book and cancel interviews. Application uses hooks from React (i.e. setState) and two custom hooks. Testing included unit and integration testing of individual functions and components. End-to-end testing focused on a typical user expierence for booking, changing and cancelling appointments. This was a school project and is not intended for commerical use. 

## Setup

#### Install dependencies with `npm install`.
* axios
* classnames
* normalize.css
* react
* react-dom
* react-scripts

#### Dev dependencies
* babel
* storybook
  * addon-action
  * backgrounds
  * links
  * addons
* node-sass
* prop-types
* react-test-render

`NOTE: The minimum supported version of react and react-test-renderer is ^16.9.0. for more information please see the react hooks testing page https://github.com/testing-library/react-hooks-testing-library#peer-dependencies`
#### Dev dependencies - Testing
* cypress
* jest


## Running Webpack Development Server

```sh
npm start
```
https://webpack.js.org/

`NOTE:` To simiulate deployment a proxy was  added to the package.json file. For more information on this please contact Scott Morton at davidsmorton@gmail.com. 
## Running Jest Test Framework

```sh
npm test
```
https://jestjs.io/docs/en/getting-started
## Running Storybook Visual Testbed

```sh
npm run storybook
```
https://storybook.js.org/docs/react/get-started/introduction
## Running Cypress Visual Testbed

```sh
npm run cypress
```
https://docs.cypress.io/guides/getting-started/installing-cypress.html
## Features

![start_Here](https://github.com/davidsmorton/scheduler/blob/master/documents/starting.png)
### landing page 
____________________________________________

![cancel](https://github.com/davidsmorton/scheduler/blob/master/documents/cancel.png)
### cancelling apppointment notice
____________________________________________

![deleting](https://github.com/davidsmorton/scheduler/blob/master/documents/deleting.png)
### deleting feedback for user
____________________________________________



![nav_days](https://github.com/davidsmorton/scheduler/blob/master/documents/nav_days.png)
### selecting days
____________________________________________



![empty_form](https://github.com/davidsmorton/scheduler/blob/master/documents/making_app_form.png)
### empty interview
____________________________________________

![Saving](https://github.com/davidsmorton/scheduler/blob/master/documents/saving.png)
### saving feedback for user
____________________________________________


![filled_out_app](https://github.com/davidsmorton/scheduler/blob/master/documents/making_app.png)
### completed interview
____________________________________________


![app_complete](https://github.com/davidsmorton/scheduler/blob/master/documents/app_complete.png)
### scheduled interview
____________________________________________




## Security 
There is a known security issue `serialize-javascript`. This application is for demonstration purposes. 

If you have any questions please contact Scott Morton - davidsmorton@gmail.com.