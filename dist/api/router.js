"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.injectRoutes = function (app) {
        app.get("/get", function (req, res) {
            console.log("get callee");
            res.status(200).json({ message: "successfull" });
        });
    };
    return Router;
}());
exports.Router = Router;
