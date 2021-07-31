"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var router_1 = require("./api/router");
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.initializeMiddlewares();
    }
    App.prototype.initializeMiddlewares = function () {
        router_1.Router.injectRoutes(this.app);
    };
    return App;
}());
exports.App = App;
