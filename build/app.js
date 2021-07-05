"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var app = (0, _express["default"])();
var PORT = 3000;
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(PORT, function () {
  return console.log("Example app listening at http://localhost:".concat(PORT));
});
//# sourceMappingURL=app.js.map