import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  age: { type: Number, trim: true, required: true, min: 18, max: 50 },
  fees: { type: mongoose.Types.Decimal128, trim: true, required: true },
  join: { type: Date, default: Date.now },
});

//Compiling Schema
const StudentModel = mongoose.model("student", studentSchema);

//Export Model
export { StudentModel };
