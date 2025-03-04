








import jwt from "jsonwebtoken";

let generatToken =(res,userId)=>{
    let token =jwt.sign({ userId :userId},process.env.jWT_SECRET,{
        expiresIn:'1d',
    });
    res.cookie("token",token,{
        httpOnly:true,
        sameSite: "strict",
        maxAge: 24*60*60*1000,
        secure: process.env.NODE_ENV ==="production",
    });
    return token
};

export default generatToken; 