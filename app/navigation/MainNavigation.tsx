import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Phone from "../screens/Phone";
import OTP from "../screens/OTP";

const Stack = createNativeStackNavigator();
export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Phone">
        <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="OTP" component={OTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
