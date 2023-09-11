import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import { dbConnection } from "./db/dbConnection.js";
import web from "./routes/web.js";
const app = express();

//Morgan
app.use(morgan("dev"));

//Configure environment variables
config();

//Database connection
const uri = process.env.MONGO_URI;
dbConnection(uri);

//Json middleware
app.use(express.json());

//Load routes
app.use("/", web);

//Server listening
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server runing on http://localhost:${port}`);
});
