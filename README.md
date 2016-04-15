# HackOverflow getting started

A barebones Node.js app for a hackathon workshop, modified from the Heroku sample app from [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```