# bar-bee-que
React app listing top 20 barbecue restaurants from Austin Tx.

## Introduction

> Here you will find the top 20 barbecue restaurants from Austin Tx. You will be able to filter through the list. And can click either on "View Details" or on the marker for more Information about the restaurant. The app is also accessible using a screen reader.

> I pull the data from yelp for reviews and business details. If you would like to look at the simple api used you can view it [here](https://github.com/forrestw92/simple-yelp-api)

## Installation

> npm install

## How to run - Development
To Access the Service Worker. Please run in Production mode.
For Hot reloading of SCSS changes.
> npm run watch-css

Start Live Dev Server
> npm run start

## Hot to run - Production
Running in production mode will grant access to the service worker for caching and offline usage.

Build SCSS
> npm run build-css

If deploying to a sub directory don't forget to add "homepage":"absoluteUrlPath", To package.json

Build Project
> npm run build
 
> serve -s build
