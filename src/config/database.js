import mongoose from "mongoose";

const connect = async ()=>{

    mongoose.connect("mongodb+srv://Divya:87090Aa@cluster0.njqd9qy.mongodb.net/");

}

export default connect;