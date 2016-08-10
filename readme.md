# Forecast.io Reverse Proxy Server

## Getting Started

This is a very simple reverse proxy server to allow browser requests to the Forecast.io API. In order to utilize this server you should clone this repo, start it up, and route all API requests through [localhost:8080](http://localhost:8080).

## Instructions

```
git clone https://github.com/jasonleibowitz/wthr.ly-api.git
cd wthr.ly-api

npm install
npm start
```

## Usage

In your web application you can now route any API call to `localhost:8080` and this server will act as the middleman to Forecast.io's API, delivering your request to you without a CORS header.

Be sure to use the following url route:

```
http://localhost:8080/forecast/<yourForecast.ioAPiKEY>/<lat,lng>
```
