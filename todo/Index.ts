import { Application, Request, Response } from 'express';
import express from 'express';
import cors from "cors"
import moment from "moment"
import { log } from 'console';
import { todo
 } from 'node:test';
 import stdent from "./Router/ServicerRouter"
const port: number= 3078
const app:Application =express()

app.use(cors()).use(express.json())

const server =app.listen(port,()=>{
       console.log("huurray server is ready");
       
})
process.on("uncaugghtException", (error: any)=>{
       console.log("sever is shutting down due to uncaughtexcepyion");
       console.log("uncaughtException", (error));
       process.exit(1)
});
process.on("unhandledRejection", (reason:any)=>{
       console.log("sever is shutting down due to uncaughtexcepyion");
       console.log("uncaughtException", (reason));
       process.exit(1)

       server.close(()=>{
              process.exit(1)
       })
});