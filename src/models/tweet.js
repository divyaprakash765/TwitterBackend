import mongoose from "mongoose";

const { Schema } = mongoose;

const tweetSchema = new Schema({
    content : {
        type: String
    },
    likes : {
        type: Number
    },
    noOfRetweets : {
        type: Number
    },
    comment: {
        type: String
    },
});

const Tweet = mongoose.model('Tweet',tweetSchema);

export default Tweet;