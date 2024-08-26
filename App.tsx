import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MainStack from "./app/navigation/MainNavigation";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}
    //   <MainStack />
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    <MainStack />
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
