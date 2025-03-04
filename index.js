import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./router/router.js";
import connectDB from "./utils/connection.js";


const app =express();
app.use(cookieParser());

app.use(
    cors({
      origin:["https://localhost:5173"],
      credentials:true,
    })
);

app.use(express.json());
const  port =process.env.PORT || 3000;
app.use("/api",routes);

app.listen(port,()=>{
    connectDB();
    console.log(`Server running on port ${port}`);
});

//simulated data based

