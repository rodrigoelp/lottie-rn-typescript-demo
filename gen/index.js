"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const lottie_react_native_1 = __importDefault(require("lottie-react-native"));
class App extends React.PureComponent {
    render() {
        return (<react_native_1.View style={{ flex: 1 }}>
                <lottie_react_native_1.default source={require("../fireworks.json")} loop autoPlay/>
            </react_native_1.View>);
    }
}
react_native_1.AppRegistry.registerComponent(require("../app.json").name, () => App);
//# sourceMappingURL=index.js.map