import express from "express";
import connectDb from "./db/connectDb.js";
import cors from "cors";
import userModel from "./model/userSchema.js";
const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "https://instagram-ten-chi.vercel.app",
  })
);

connectDb(
  "mongodb+srv://01aggarwalshubh:R0HkrflJ4IHXun5h@cluster0.ukn9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/user", async (req, res) => {
  try {
    const { email, password } = req.body;
    const docs = new userModel({
      email: email,
      password: password,
    });
    const result = await docs.save();
    console.log(result);
    res.status(201).json({
      success: true,
      response: "User Register Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      response: "Email shoud be Unique",
    });
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
