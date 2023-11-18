"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var req_string = {
  type: String,
  required: true
};
var empresa_schema = new _mongoose.Schema({
  ruc: req_string,
  nombre: req_string,
  domicilio: String,
  telefono: String
});
var _default = exports["default"] = (0, _mongoose.model)('empresa', empresa_schema);