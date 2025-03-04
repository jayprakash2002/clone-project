
import user from "../models/user.schema.js";
import bcrypt from "bcrypt";



import generatToken from "../utils/generatToken.js";
import{ verification_Email} from "../mail/emailsending.js";



let signup = async(req,res)=>{
    let { username,email, password } =req.body;
    try{
        //let { username,email, password } =req.body;
        if(!username || !email || !password){
            return res.status(400).json({ message:"All field are require"});
        }
        let users = await user.findOne({email});
        if (users){
            return res.status(400).json({ message: "Email already Exists"});
        }
        let passwordHashing= await bcrypt.hash(password,10);
        let emailVerificationToken= Math.floor(
            100000+ Math.random() *900000 
        ).toString();
        let newUser = user.create({
            username, 
            email, 
            password: passwordHashing,
            emailVerificationToken,
            verificationTokenExpiresAt: Date.now() +24*60*60 *1000,
            isVerified:false,
        });
        let savedUser = await newUser.save();
        generatToken(res,savedUser._id);
        await verification_Email(
            savedUser._doc.email,
            savedUser._doc.emailVerificationToken
        );
                  
        res.status(201).json({
            message:`${savedUser._doc.username} signup successfully`,
            user:{
                ...savedUser._doc,
                password:"*******",
            },
        });

    }catch (err){
        console.error(err);
        return res.status(500).json({ message:"Internal Servar Error"});
    }
};

export { signup };