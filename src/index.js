import express from "express";
import connect from "./config/database.js";
import Tweet from "./models/tweet.js";
import hashTag from "./models/hashtags.js";
import serverConfig from "./config/serverConfig.js";
import TweetRepository from "./repository/tweet-repository.js";

const app = express();

app.listen(serverConfig.PORT,async ()=>{
    console.log("serever is running on port: 3000");
    // mongo db collection establishment
    connect();
    console.log("Mongo DB connected");

    // create a schema
    // Tweet.create({
    //     content : "This is my first tweet",
    //     likes : 25,
    //     noOfRetweets : 5,
    //     comment: "" 
    // });
     
    // hashTag.create({
    //     text : "travel",
    //     tweets: ['680881f0269f1864c471dc4b']
    // })
    
    const tweetRepo = new TweetRepository();
    let tweets = await tweetRepo.getAll();
    let tweet = await tweetRepo.deleteTweet({
        '_id': '68088360ae21d3a3dae6e4e5'
    });
    console.log(tweet);
})
