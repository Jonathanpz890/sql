"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: (_a = process.env.ALLOWED_ORIGINS) === null || _a === void 0 ? void 0 : _a.split(','),
    methods: "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    credentials: true,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
}));
console.log(process.env.ALLOWED_ORIGIN);
//# sourceMappingURL=app.js.map