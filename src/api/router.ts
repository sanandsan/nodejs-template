import { App } from "../app";
import express from "express";
import { Response, Request } from "express";
export class Router {
  public static injectRoutes(app: express.Application) {
    app.get("/get", (req, res) => {
      console.log("get callee");
      res.status(200).json({ message: "successfull" });
    });
  }
}
