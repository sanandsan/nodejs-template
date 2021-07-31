import express from "express";
import { Router } from "./api/router";
export class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.initializeMiddlewares();
  }
  initializeMiddlewares() {
    Router.injectRoutes(this.app);
  }
}
