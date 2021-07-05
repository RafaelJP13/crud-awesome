"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => console.log("Example app listening at http://localhost:".concat(PORT)));