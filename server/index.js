import express from "express";
import {auth} from "./config.js";
import bodyparser from "body-parser";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import cors from "cors";

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log("Server running on port 3000");
});