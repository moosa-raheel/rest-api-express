import { Router } from "express";
import { studentController } from "../controllers/studentController.js";
const router = Router();

//Create Data
router.post("/student/create", studentController.createData);

//Read all data
router.get("/students", studentController.readData);

//Read Data by id
router.get("/student/:id", studentController.readDataById);

//Update Data
router.put("/student/update/:id", studentController.updateData);

//Delete Data
router.delete("/student/delete/:id", studentController.deleteData);

//Export router
export default router;
