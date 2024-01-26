require('dotenv').config();

const mongoose=require('mongoose');
const connection_url=process.env.database_url
mongoose.connect(connection_url);

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    todostatus:Boolean,
    username:String
})

const userSchema=mongoose.Schema({
    username:String,
    password:String
})

const todo = mongoose.model("todo",todoSchema);
const user = mongoose.model("user",userSchema);

module.exports ={todo,user};
