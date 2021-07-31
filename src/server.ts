import { App } from "./app";

const app = new App();

const server = app.app;
server.listen(3000, () => {
  console.log("server listening on 3000");
});
