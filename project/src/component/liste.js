"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const todoReducer_1 = require("../store/todoReducer");
require("./liste.css");
function Liste() {
    const [text, setText] = (0, react_1.useState)('');
    const elements = (0, react_redux_1.useSelector)((state) => state.elements || []);
    const dispatch = (0, react_redux_1.useDispatch)();
    const addString = () => {
        if (text.trim()) {
            dispatch({ type: todoReducer_1.ADD_ELEMENT, payload: { text, completed: false } });
            setText('');
        }
    };
    const deleteString = (id) => {
        dispatch({ type: todoReducer_1.DELETE_ELEMENT, payload: id });
    };
    const changeState = (id) => {
        dispatch({ type: todoReducer_1.CHANGE_STATE_ELEMENT, payload: id });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)("ul", { className: "list", children: elements.map((el, key) => ((0, jsx_runtime_1.jsxs)("div", { className: "item", children: [(0, jsx_runtime_1.jsxs)("label", { className: "checkbox-container", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", checked: el.completed, onChange: () => changeState(el.id) }), (0, jsx_runtime_1.jsx)("span", { className: "checkmark" })] }), (0, jsx_runtime_1.jsx)("li", { children: el.text }), (0, jsx_runtime_1.jsx)("button", { onClick: () => deleteString(el.id), children: "delete" })] }, key))) }), (0, jsx_runtime_1.jsxs)("div", { className: "input-container", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: text, onChange: (e) => setText(e.target.value), placeholder: "Enter text" }), (0, jsx_runtime_1.jsx)("button", { onClick: addString, children: "Ajouter" })] })] }));
}
exports.default = Liste;
