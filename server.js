import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

const app = express();
// connect to db
await connectDB();

// middlewares
app.use(cors());

//  Routes
app.get("/", (req, res) => {
  res.send("hello this is lsm project");
});

app.post('/clerk', express.json(), clerkWebhooks)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port : ${port}`));
