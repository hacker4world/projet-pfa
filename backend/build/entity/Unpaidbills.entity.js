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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unpaidbills = void 0;
const typeorm_1 = require("typeorm");
const Account_entity_1 = require("./Account.entity");
let Unpaidbills = class Unpaidbills extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Unpaidbills.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unpaidbills.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unpaidbills.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unpaidbills.prototype, "periode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Unpaidbills.prototype, "deadline", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unpaidbills.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unpaidbills.prototype, "contract", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Account_entity_1.Account, (account) => account.cin),
    (0, typeorm_1.JoinColumn)({ name: "cin" }),
    __metadata("design:type", Account_entity_1.Account)
], Unpaidbills.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unpaidbills.prototype, "cin", void 0);
Unpaidbills = __decorate([
    (0, typeorm_1.Entity)()
], Unpaidbills);
exports.Unpaidbills = Unpaidbills;
