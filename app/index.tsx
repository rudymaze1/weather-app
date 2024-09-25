
import { Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store/store";
import { Provider } from "react-redux";



export default function Index() {
  return ( 
  <Provider store={store}>
    <HomeScreen /> 

  </Provider>
  );

};