import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

import authRouter from "./routes/authRoute.js";
import adminRouter from "./routes/adminRoute.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("The Server is Live and running 🏃‍♂️");
});

//authentication routes
app.use("/intellen/v1/auth", authRouter);

//Admin routes
app.use("/intellen/v1/admin", adminRouter);

//Manager routes

//Emplyee routes

//Viewer routes

mongoose
  .connect(
    `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPass}@cluster0.vjtw6qs.mongodb.net/IntellenTech`
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(PORT, () => {
  console.log(`server started at local port: ${PORT}`);
});
