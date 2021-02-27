"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    test(req, res, next) {
        const name = String(req.query.name);
        return this.usersService.get(name);
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/test")
], UsersController.prototype, "test", null);
UsersController = __decorate([
    inversify_express_utils_1.controller("/users"),
    __param(0, inversify_1.inject("UsersService"))
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map