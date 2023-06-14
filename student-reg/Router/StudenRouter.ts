import { Router} from "express"
import express from 'express';
import { deleteStudent, getStudents,viewStudents,updeleteStudent,registerStudents}  from "../Controller/StudentController";

const router:Router = express.Router();

router.route('/').get(viewStudents)
router.route('/get/:id').get(getStudents)
router.route('/delete/:id').delete(deleteStudent)
router.route('/delete/:id').patch(updeleteStudent)
// router.route('/').get(viewStudents)
router.route('/register/').post(registerStudents)
export default router