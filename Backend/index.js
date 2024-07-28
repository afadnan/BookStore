import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express(); //create app with help of express function
app.use(cors()); //middleware
app.use(express.json());
//const port = 3000; //sever runing port on 3000
//useing app -> request send and server ko use kr skte hai
dotenv.config();
const PORT = process.env.PORT || 4000;

const URI = process.env.MongoDBURI;

//connect to mongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// deployment
if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();
  app.use(express.static("Frontend/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirPath, "./Frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is listening on the ${PORT}`);
});
