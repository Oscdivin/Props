// import express ,{Request, Response} from "express";
// import Database from "../Utils/Database";
// import moment from "moment"
// import { iTodo } from "../utils/interface";

//  export const viewTask =(req: Request, res:Repones):Repones=>{

//        try{
//               return res.status(201).json({message: "Task not Found", })
//        } catch (error){
//                 return res.status(404).json({message: "Task not Found", error})
//        }
//  }
//  export const createTask =(req: Request, res:Repones):Repones=>{

//        try{
//               const {title} = req.body;
//               const ID= crypto.randomUUID()
//               let date = new Date()
//               let Task:iTodo ={
// id:ID,
// data: moment(date).format("lll"),
// time: moment(date).formatNow(),
// title,
// complete: false
//               }
//               Database.push(Task)
//        } catch (error){
//               return
//        }
//  }

//  export const createTask =(req: Request, res:Response):Repones=>{
//  }
//  export const deleteTask =(req: Request, res:Response):Repones=>{
//        try{
// const 
//        }catch{
// const {id} = req.params
// const task = Database.filter((el:iTodo)=>{

// })
//        }
//  }

//  export const getSigleTask =(req: Request, res:Response):Repones=>{
//        try{
//               const {id} = req.params
//               const task = Database.filter((el:iTodo)=>{
//                      return el.id ===id 
//               })
//               return res.status(200).json({message: "Single Task Gooten", data: task})
//        }catch(error){
//               return res.status(404).json({message: "can find task",error })
//        }
//  }
//  export const updateTask =(req: Request, res:Response):Repones=>{
//        try{
//               const {id} = req.params
//               const task = Database.filter((el:iTodo)=>{
//                      return el.id ===id ? (el.complete=true): null
//               })
//               return res.status(201).json({message: "Task completed", data: task})
//        }catch(error){
//               return res.status(404).json({message: "can update task",error })
//        }
//  }