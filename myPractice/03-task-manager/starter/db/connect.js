const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://akmal:akmal123@cluster0.v17z1.mongodb.net/Task Manager?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(connectionString)
  .then(() => console.log("connected to the db"))
  .catch((err) => console.log(err));
