require('dotenv').config();

const mongoose=require('mongoose');
const connection_url=process.env.database_url
mongoose.connect(connection_url);

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    todostatus:Boolean
})

const todo = mongoose.model("todo",todoSchema);

module.exports ={todo};
