const express = require("express")
const { someFunc, anotherFunc } = require("./../controllers/someFile.js")
const someRouter = express.Router()

someRouter.get("/someEndpoint", someFunc)
someRouter.get("/anotherEndpoint", anotherFunc)

const someRouter = require("./routers/routes/someFile");
app.use("/somePath", someRouter);

module.exports = someRouter 