"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const localeStorageMiddleware_1 = require("../middleware/localeStorageMiddleware");
const todoReducer_1 = require("./todoReducer");
exports.default = (0, redux_1.createStore)(todoReducer_1.elementReducer, (0, redux_1.applyMiddleware)(localeStorageMiddleware_1.saveToLocalStorageMiddleware));
