import express,{Request, Response} from "express"

import axios from "axios"

const url =`http://localhost:3450`

export const getStudent = async (req: Request, res:Response): Promise <Response>=>{
       try{
              const student =await axios.get(`${url}/api/student/`).then((res:any)=>{
                     return res.data
              })
              return res.status(200).json({message:"student Details", data: student})
}catch(error){  
       return res.status(404).json({message: "can fetch student", error})
}
       }



// import expres, {Request, Response} from "express"
// import axios from "axios"

// const url = `http://localhost:1000`
// export const  getStudent = async (req:Request, res: Response):Promise<Response> =>{
//     try {
//         const student = await axios.get(`${url}/api/student/`).then((res:any)=>{
//             return res.data
//         })
//         return res.status(200).json({
//             message: "Student Details",
//             data: student
//         })
//     } catch (error) {
//         return res.status (404).json({
//             message:"Can't Fetch Student",
//             error
//         })
//     }
// }