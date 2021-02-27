"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const bodyParser = __importStar(require("body-parser"));
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const users_service_1 = require("./controllers/users.service");
const dotenv_1 = require("dotenv");
require("./controllers/users.controller");
dotenv_1.config();
let container = new inversify_1.Container();
container.bind('UsersService').to(users_service_1.UsersService);
// create server
let server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
let app = server.build();
app.listen(process.env.PORT, () => {
    console.log('Your server is runing');
});
//# sourceMappingURL=webserver.js.map