"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fileManager_1 = __importDefault(require("../fileManager"));
var router = express_1.default.Router();
var isValid = function (input) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log(input.imagename);
                console.log(input.width);
                if (Object.keys(input).length === 0) {
                    return [2 /*return*/, 'Please Enter a Valid Query in the Form: http://localhost:4000/api?imagename={filename.jpg}&height={height}&width={width}'];
                }
                if ((input.width === undefined && input.height === undefined) ||
                    ((input.height < 0 || input.height === undefined) &&
                        (input.width < 0 || input.width === undefined))) {
                    return [2 /*return*/, 'Please Enter a Valid Width and Height'];
                }
                if (Number.isNaN(input.width) ||
                    input.width < 0 ||
                    input.width === undefined) {
                    return [2 /*return*/, 'Please Enter a Valid Width'];
                }
                if (Number.isNaN(input.height) ||
                    input.height < 0 ||
                    input.height === undefined) {
                    return [2 /*return*/, 'Please Enter a Valid Height'];
                }
                return [4 /*yield*/, fileManager_1.default.isImageAvailable(input.imagename)];
            case 1:
                if (!!(_b.sent())) return [3 /*break*/, 3];
                _a = "Please Enter a Valid Image Name From: ".concat;
                return [4 /*yield*/, fileManager_1.default
                        .availableImageList()
                        .join(' , ')];
            case 2: return [2 /*return*/, _a.apply("Please Enter a Valid Image Name From: ", [_b.sent()])];
            case 3: return [2 /*return*/, true];
        }
    });
}); };
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Query, isValidated, checkCache, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                Query = req.query;
                return [4 /*yield*/, isValid(Query)];
            case 1:
                isValidated = _c.sent();
                if (typeof isValidated === 'string') {
                    res.send(isValidated);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, fileManager_1.default.checkCache(Query)];
            case 2:
                checkCache = _c.sent();
                if (!(checkCache === false)) return [3 /*break*/, 5];
                return [4 /*yield*/, fileManager_1.default.createProcessedImage(Query)];
            case 3:
                _c.sent();
                _b = (_a = res).sendFile;
                return [4 /*yield*/, fileManager_1.default.createProcessedImagePath(Query)];
            case 4:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 6];
            case 5:
                res.sendFile(checkCache);
                _c.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
router.get('/full', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var imagesURL, i;
    return __generator(this, function (_a) {
        try {
            imagesURL = [];
            for (i = 0; i < fileManager_1.default.availableImageList().length; i++) {
                imagesURL[i] = "http://localhost:4000/images/full/".concat(fileManager_1.default.availableImageList()[i]);
            }
            res.send(imagesURL);
        }
        catch (error) {
            console.log('Error Finding Avaialable Images Dir');
            res.send(error);
        }
        return [2 /*return*/];
    });
}); });
exports.default = router;
