import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../navigation.d";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { initializeApp } from "firebase/app";
import auth from "@react-native-firebase/auth";

type Props = {};

const Phone = (props: Props) => {
  // initialize app:
  const firebaseConfig = {
    apiKey: "AIzaSyD9-6b0e2v4YB8QZgZjzJ1Q7zJ8z4q5J9M",
    authDomain: "myapp-12345.firebaseapp.com",
    projectId: "myapp-12345",
    storageBucket: "myapp-12345.appspot.com",
    messagingSenderId: "12345",
    appId: "1:12345:web:12345",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const auth = getAuth();
  const navigation = useNavigation<RootStackParamsList>();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");
  const [loading, setIsLoading] = useState(false);

  // handle sign in with phone number:
  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press!
  async function signInWithPhoneNumber(phoneNumber) {
    try {
      setIsLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      console.log("confirmation", confirmation);
    } catch (error) {
      setIsLoading(false);
      console.error("Error signing in with phone number:", error);
      // Handle the error here
    }
  }

  if (confirm) {
    setIsLoading(false);
    navigation.navigate("OTP", { phoneNumber });
  }

  if (loading) {
    <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Input phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />

      <TouchableOpacity
        onPress={() => {
          // navigation.navigate("OTP", { phoneNumber });
          // signInWithPhoneNumber(phoneNumber);
          signInWithPhoneNumber("+233555000000");
          // Alert.alert("Phone number submitted", phoneNumber);
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Phone;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0D0D0E",
    padding: 10,
    margin: 12,
    width: 200,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
  },
});
