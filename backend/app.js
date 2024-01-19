const cors = require('cors');
const { createTodo,updateTodo } = require( './types');
const {todo}=require("./db");
const express=require('express');
const app=express();
const port=3000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to What ToDo')
})

app.post('/todo', async (req,res)=>{
    const payload=req.body;
    const parsedpayload = createTodo.safeParse(payload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"You sent the wrong payload"
        })
        return;
    }
    await todo.create({
        title:payload.title,
        description:payload.description,
        todostatus:false
    });
    res.json({
        msg: "todo created successfully"
    })
});
app.get('/todos',async (req,res)=>{
    const response = await todo.find({});
    res.json({
        response
    })
});
app.put('/completed',async (req,res)=>{
    const payload=req.body;
    const parsedpayload=updateTodo.safeParse(payload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"You sent the wrong payload"
        })
        return;
    }
    todo.findOneAndUpdate({_id:payload.id},{
        todostatus:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
});


app.listen(port,()=>() => {
    console.log(`✅ Server is running on port ${PORT}`);
  });