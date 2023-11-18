"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _package = _interopRequireDefault(require("../package.json"));
var _initialSetup = require("./libs/initialSetup");
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _role = _interopRequireDefault(require("./routes/role.routes"));
var _empresa = _interopRequireDefault(require("./routes/empresa.routes"));
var _representante = _interopRequireDefault(require("./routes/representante.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
(0, _initialSetup.create_roles)();
app.set('pkg', _package["default"]);
app.use((0, _morgan["default"])('dev'));
app.set("json spaces", 4);
app.get('/', function (req, res) {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use('/users', _user["default"]);
app.use('/auth', _auth["default"]);
app.use('/role', _role["default"]);
app.use('/empresa', _empresa["default"]);
app.use('/representante', _representante["default"]);
app.use('/pagina', _express["default"]["static"]('public'));
var _default = exports["default"] = app;