// import packages
const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");

// Declare express server port and redis client port
const PORT = process.env.PORT || 3000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;


// ------------------------------------------------------------------

//Create Redis client on Redis port
const redisClient = redis.createClient(REDIS_PORT);

redisClient.on('error', (err) => {
    console.log("Redis is having trouble:\n     " + err);
});

redisClient.on('connect', (err) => {
    console.log("Redis connected successfully");
});


// ------------------------------------------------------------------

//Create an app const by excecuting express like a function
const app = express();



// ------------------------------------------------------------------

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
  });