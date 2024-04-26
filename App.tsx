import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RateOrderComponent from "./components/RateOrderComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RateOrderScreen from "./screens/RateOrderScreen";
import PhoneNumberScreen from "./screens/PhoneNumberScreen";
import CodeVerificationScreen from "./screens/CodeVerificationScreen";
import ProductsList from "./screens/ProductLists";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ProductsList />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
