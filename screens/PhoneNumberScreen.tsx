import { AntDesign } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PhoneNumberInput from "../components/PhoneNumberInput";

const PhoneNumberScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.mainContainer}>
            <View>
              <AntDesign name="arrowleft" size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Your Phone !</Text>
              <Text style={styles.description}>
                A 4 digit security code will be sent via SMS to verify your
                mobile number
              </Text>
              <PhoneNumberInput style={styles.phoneNumberInput} />
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#242632",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  mainContainer: {
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  textContainer: {
    marginTop: 70,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    color: "white",
    fontWeight: "700",
  },
  description: {
    color: "#60626c",
    fontSize: 16,
    marginTop: 30,
  },
  phoneNumberInput: {
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
});

export default PhoneNumberScreen;
