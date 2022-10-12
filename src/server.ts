import "reflect-metadata";
import express from "express";
import { createConnection } from "./shared/infra/data-source";
createConnection()

const app = express();

app.get("/", (req, res, next) => {
  res.json({
    message: "Hello World!"
  })
})

app.listen(3000, () => {
  console.log("I'm running");
})