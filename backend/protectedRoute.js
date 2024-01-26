const jwt=require('jsonwebtoken');
require('dotenv').config();

function verifyToken(req,res,next){
    const authHeader=req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token==null) return res.status(401).json({"error":"token not found"});
    try{
        const response=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        req.headers['username']=response;
    }catch(err){
        return res.status(401).json({"error":"invalid token"});
    }
    return next();
}

module.exports={verifyToken};