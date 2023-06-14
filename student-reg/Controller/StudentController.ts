import express ,{Request, Response} from "express";
import Database from "../utils/Database";
import crypto from "crypto"
import { iData } from "../utils/interface";
export const viewStudents = (req:Request, res:Response):Response =>{
       try{
              return res.status(200).json({message: "list of students", data: Database})
       }catch(error){
              return res.status(404).json({message: "can`t Fetch students", error})
       }
}
export const registerStudents = (req:Request, res:Response):Response =>{
       try{
              const {name, email, password,age} =req.body;
              const ID = crypto.randomUUID()
              const ID2 = crypto.randomBytes(16).toString("hex")

           const newData:iData={
                     id: ID,
                     name,
                     email,
                     password,
                     age
              }
              Database.push(newData)
              return res.status(201).json({message: "Single Student is being Registered",
              data:newData})
       }catch(error){
              return res.status(404).json({message: "can`t Fetch students", error})
       }
}
export const getStudents = (req:Request, res:Response):Response =>{
       try{
              const {id} =req.params;
          const singlesStudent  =Database.filter((el:iData)=>{
              return el.id===id
            })
              return res.status(201).json({message: "Single Student is being Registered",
              data:Database})
       }catch(error){
              return res.status(404).json({message: "can`t Fetch students", error})
       }
}
export const deleteStudent = (req:Request, res:Response):Response =>{
       try{
              const {id} =req.params;
         const student=   Database.filter((el:iData)=>{
              return el.id!==id;
            })
              return res.status(200).json({message: "Single Student is being Registered",
              data:student})
       }catch(error){
              return res.status(404).json({message: "can`t Fetch students", error})
       }
}
export  const  updeleteStudent= (req: Request, res:Response):Response=>{
try{
       const {id,} = req.params
       const {name, email, password, age}= req.body;
       const mainID = parseInt(id)-1
       Database[mainID].age =age
       Database[mainID].name =name
       Database[mainID].email =email
       Database[mainID].password =password
       return res.status(201).json({message:"Details updated", data:Database[mainID]})
}catch (error){
return res.status(404).json({message: "can update student details", error})
}
}