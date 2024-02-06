import { View } from "react-native";
import Login from "./componentes/login";
import Constants from "expo-constants";
export default function App() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <Login />
    </View>
  );
}
