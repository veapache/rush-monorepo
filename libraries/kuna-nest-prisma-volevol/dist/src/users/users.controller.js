"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersController = class UsersController {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAllUsers() {
        return this.prismaService.user.findMany();
    }
    async signupUser(userData) {
        var _a;
        const postData = (_a = userData.posts) === null || _a === void 0 ? void 0 : _a.map((post) => {
            return { title: post === null || post === void 0 ? void 0 : post.title, content: post === null || post === void 0 ? void 0 : post.content };
        });
        return this.prismaService.user.create({
            data: {
                name: userData === null || userData === void 0 ? void 0 : userData.name,
                email: userData.email,
                posts: {
                    create: postData
                }
            },
        });
    }
};
__decorate([
    common_1.Get('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    common_1.Post('signup'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signupUser", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map