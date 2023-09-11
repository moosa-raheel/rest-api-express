import { StudentModel } from "../models/Student.js";

class studentController {
  //Create Data

  static createData = async (req, res) => {
    try {
      const data = new StudentModel(req.body);
      await data.save();
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      res.json({ error: "Some error accured" });
    }
  };

  //Read all data

  static readData = async (req, res) => {
    try {
      const data = await StudentModel.find();
      res.json(data);
    } catch (err) {
      console.log(err);
      res.json({ error: "Some error accured" });
    }
  };

  //Read One by Id

  static readDataById = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await StudentModel.findById(id);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.json({ error: "Some error accured" });
    }
  };

  // Updata Data

  static updateData = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await StudentModel.findByIdAndUpdate(id, req.body);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.json({ error: "Some error accured" });
    }
  };

  //Delete Data

  static deleteData = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await StudentModel.findByIdAndDelete(id);
      res.status(204).json(data);
    } catch (error) {
      console.log(error);
      res.json({ error: "Some error accured" });
    }
  };
}

//Export controller
export { studentController };
