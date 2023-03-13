"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var fileManager_1 = __importDefault(require("./fileManager"));
var images_1 = __importDefault(require("./routes/images"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: true, credentials: true }));
dotenv_1.default.config();
var PORT = process.env.PORT || 4000;
// Routes
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/api', images_1.default);
app.use('/images', express_1.default.static('assets'));
app.listen(PORT, function () {
    fileManager_1.default.isThumbFolderAndCreate();
    console.log("Listening to requests on http://localhost:".concat(PORT));
});
exports.default = app;
