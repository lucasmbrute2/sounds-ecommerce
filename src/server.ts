import "reflect-metadata";
import "express-async-errors";
import "./shared/container"
import express, { NextFunction, Request, Response } from "express";
import { createConnection } from "./shared/infra/data-source";
import { AppError } from "./shared/errors/AppError";
import { router } from "./shared/http/routes";
createConnection()

const app = express();
app.use(express.json());
app.use(router)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    })
  }

  return res.status(500).json({
    status: "error",
    message: `Iternal server error - ${err.message}`
  })
})

app.get("/", (req, res, next) => {
  res.json({
    message: "Hello World!"
  })
})

app.listen(3333, () => {
  console.log("I'm running");
})