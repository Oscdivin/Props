import  express,{Application, Request, Response} from "express"
import cors from "cors"
import student  from "./Router/StudenRouter";
const post: number= 5000
const app:Application= express() 
app.use(cors()).use(express.json())
.use("/api/student", student)

const sever= app.listen(post,()=>{
console.log("sever is now ready", post);
});
process.on("uncaugghtException", (error: any)=>{
       console.log("sever is shutting down due to uncaughtexcepyion");
       console.log("uncaughtException", (error));
       process.exit(1)
});
process.on("unhandledRejection", (reason:any)=>{
       console.log("sever is shutting down due to uncaughtexcepyion");
       console.log("uncaughtException", (reason));
       process.exit(1)

       sever.close(()=>{
              process.exit(1)
       })
});