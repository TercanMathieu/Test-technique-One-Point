"use strict";
exports.__esModule = true;
var liste_1 = require("./component/liste");
var react_redux_1 = require("react-redux");
var index_1 = require("./store/index");
function App() {
    return (<react_redux_1.Provider store={index_1["default"]}>
      <liste_1["default"] />
    </react_redux_1.Provider>);
}
;
exports["default"] = App;
