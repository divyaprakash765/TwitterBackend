import express from "express";
import connect from "./config/database.js";
import Tweet from "./models/tweet.js";
import serverConfig from "./config/serverConfig.js";

const app = express();

app.listen(serverConfig.PORT,async ()=>{
    console.log("serever is running on port: 3000");
    // mongo db collection establishment
    connect();
    console.log("Mongo DB connected");

    // create a schema
    Tweet.create({
        content : "This is my first tweet",
        likes : 25,
        noOfRetweets : 5,
        comment: "This is my first comment" 
    });

    
})
