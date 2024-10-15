"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
var rootElement = document.getElementById('root');
if (rootElement) {
    var root = client_1["default"].createRoot(rootElement);
    root.render(<react_1["default"].StrictMode>
            <App_1["default"] />
        </react_1["default"].StrictMode>);
}
else {
    console.error('Element with id "root" not found');
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
