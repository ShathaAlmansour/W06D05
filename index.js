const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const DB = process.env.DB;
const app = express()
const PORT = process.env.PORT
const db = require("./db/db.js");
const morgan = require("morgan");
app.use(morgan("dev"));
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });