"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var app = new app_1.App();
var server = app.app;
server.listen(5000, function () {
    console.log("server listening on 5000");
});
