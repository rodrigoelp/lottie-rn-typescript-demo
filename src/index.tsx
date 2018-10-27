import * as React from "react";
import { View, AppRegistry } from "react-native";
import LottieView from "lottie-react-native";

class App extends React.PureComponent {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LottieView source={require("../fireworks.json")} loop autoPlay />
            </View>
        );
    }
}

AppRegistry.registerComponent(require("../app.json").name, () => App);
