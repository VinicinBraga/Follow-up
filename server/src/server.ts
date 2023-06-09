import "dotenv/config";
import env from "./utils/validateEnv"
import mongoose from "mongoose";
import express from "express";

const app = express();
const port = env.PORT;

app.get('/', (req, res) => {
  res.send('Hello, World!')
});

mongoose.connect(env.MONGO_URL)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`)
    });
  }).catch((error) => {
    console.log(`Error to connect: ${error}`)
  })

