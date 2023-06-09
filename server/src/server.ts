import app from "./app"
import env from "./utils/validateEnv"
import mongoose from "mongoose";

const port = env.PORT;

mongoose.connect(env.MONGO_URL)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`)
    });
  }).catch((error) => {
    console.log(`Error to connect: ${error}`)
  })

