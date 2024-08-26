import { TextInput, View, Text, StyleSheet } from "react-native";
import React, { useState, useRef } from "react";

const OTP = (props) => {
  const [otp, setOTP] = useState("");
  const otpBoxes = useRef<Array<TextInput>>([]);

  const handleOTPChange = (value: string, index: number) => {
    setOTP((prevOTP) => {
      const newOTP = prevOTP.split("");
      newOTP[index] = value;
      return newOTP.join("");
    });

    if (value && index < otpBoxes.current.length - 1) {
      otpBoxes.current[index + 1].focus();
    }
  };

  return (
    <View>
      <Text>OTP Boxes</Text>
      <View style={styles.otpContainer}>
        {Array.from({ length: 6 }, (_, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            value={otp[index] || ""}
            onChangeText={(value) => handleOTPChange(value, index)}
            maxLength={1}
            keyboardType="numeric"
            ref={(ref) => (otpBoxes.current[index] = ref)}
            onSubmitEditing={() => {
              if (index < otpBoxes.current.length - 1) {
                otpBoxes.current[index + 1].focus();
              }
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  otpBox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
  },
});

export default OTP;
