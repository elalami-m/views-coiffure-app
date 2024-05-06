import { AntDesign } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Timer from "../components/Timer";
import { useState, useRef, useEffect } from "react";

const CodeVerificationScreen = () => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: "#242632",
        width: "100%",
        height: "100%",
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View>
              <AntDesign name="arrowleft" size={24} color="white" />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>Verify Phone !</Text>
              <Text style={styles.subtitle}>
                A 4 digit security code will be sent via SMS to verify your
                mobile number{" "}
                <Text style={{ color: "#6d5ae8" }}>Add other text</Text>
              </Text>
              <ConfirmCodeInput style={styles.confirmCodeInput} />
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.resendTimer}>
          <Text style={styles.resendText}>
            Resend in <Timer minutes={1} /> second
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const ConfirmCodeInput = ({ style }: { style?: ViewStyle }) => {
  const [number, setNumber] = useState<{ [key: string]: number }>({});
  const [focusNumber, setFocusNumber] = useState<number>(0);

  const textRef1 = useRef<TextInput>(null);
  const textRef2 = useRef<TextInput>(null);
  const textRef3 = useRef<TextInput>(null);
  const textRef4 = useRef<TextInput>(null);

  const refsArray = [textRef1, textRef2, textRef3, textRef4];

  useEffect(() => {
    if (Object.keys(number).length < 4) {
      refsArray[Object.keys(number).length].current?.focus();
    }
  }, [number]);

  const handleTextInputChange = (value: string, index: number) => {
    const newNumber = { ...number, [index]: value };
    setNumber(newNumber);

    if (!value && index > 0) {
      setFocusNumber(index - 1);
      refsArray[index - 1].current?.focus();
    } else if (value && index < 3) {
      setFocusNumber(index + 1);
      refsArray[index + 1].current?.focus();
    }
  };

  return (
    <View style={style}>
      <View style={styles.codeInputContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <TextInput
            key={index}
            ref={refsArray[index]}
            style={[
              styles.codeInput,
              {
                borderWidth: focusNumber === index ? 2 : 0,
                borderColor: focusNumber === index ? "#9db798" : "",
              },
            ]}
            onFocus={() => setFocusNumber(index)}
            onChangeText={(value) => handleTextInputChange(value, index)}
            keyboardType="number-pad"
            placeholder="─"
            placeholderTextColor={"#4e515a"}
            maxLength={1}
            textAlign="center"
            multiline={false}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  content: {
    marginTop: 70,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    color: "white",
    fontWeight: "700",
  },
  subtitle: {
    color: "#60626c",
    fontSize: 16,
    marginTop: 30,
  },
  confirmCodeInput: {
    marginTop: 100,
  },
  continueButton: {
    backgroundColor: "#6d5ae8",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    borderRadius: 10,
  },
  continueButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  resendTimer: {
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
  resendText: {
    color: "#4e515a",
  },
  codeInputContainer: {
    flexDirection: "row",
    borderRadius: 10,
    gap: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  codeInput: {
    height: 65,
    color: "white",
    width: 65,
    backgroundColor: "#2d3039",
    borderRadius: 14,
    fontSize: 20,
  },
});

export default CodeVerificationScreen;
