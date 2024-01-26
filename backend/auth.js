require('dotenv').config();
const jwt=require('jsonwebtoken');
const Router=require('express');
const bcrypt=require('bcrypt')
const {user} = require('./db');
const router=Router();

router.post('/signup',async (req,res)=>{
    const {username,password}=req.body;
    if(username=="" || password=="") return res.status(400).json({"error":"Invalid input values provided"});
    const checkUsername=await user.findOne({username:username});
    if(checkUsername!=null){
        return res.status(409).json({"error":"username already exists"});
    }
    try{
        const hashedPassword= await bcrypt.hash(password,10);
        await user.create({
            username:username,
            password:hashedPassword
        });
        return res.status(201).json({msg:"user created successfully"});
    }
    catch(err){
        return res.status(500).json({"error":"something went wrong"});
    }
})

router.post('/signin',async (req,res)=>{
    const {username,password}=req.body;
    if(username=="" || password=="") return res.status(400).json({"error":"Invalid input values provided"});
    const checkUser=await user.findOne({username:username});
    if(checkUser==null){
        return res.status(409).json({"error":"username doesnot exists"});
    }

    try{
        bcrypt.compare(password,checkUser.password)
            .then((response)=>{
                if(!response) return res.status(401).json({"error":"incorrect password"});
                const token=jwt.sign(username,process.env.ACCESS_TOKEN_SECRET);
                return res.status(200).json({msg:"login successful","accessToken":token});
            })
    }
    catch(err){
        return res.status(500).json({"error":"something went wrong"});
    }
})

module.exports={router};