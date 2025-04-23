import mongoose from "mongoose";

const { Schema } = mongoose;

const hashTagSchema = new Schema({
    text : {
        type: String,
        required: true,
        unique: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
});

const hashTag = mongoose.model('hashTag',hashTagSchema);

export default hashTag;