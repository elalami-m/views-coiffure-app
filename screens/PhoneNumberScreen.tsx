import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PhoneNumberInput from "../components/PhoneNumberInput";

const PhoneNumberScreen = () => {
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
      <View style={{ paddingHorizontal: 14, paddingTop: 10 }}>
        <View>
          <AntDesign name="arrowleft" size={24} color="white" />
        </View>
        <View style={{ marginTop: 70, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 40, color: "white", fontWeight: "700" }}>
            Your Phone !
          </Text>
          <Text style={{ color: "#60626c", fontSize: 16, marginTop: 30 }}>
            A 4 digit security code will be sent via SMS to verify your mobile
            number
          </Text>
          <PhoneNumberInput style={{ marginTop: 100 }} />
          <TouchableOpacity
            style={{
              backgroundColor: "#6d5ae8",
              width: "100%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 70,
              borderRadius: 10,
            }}
          >
            <Text style={{color:"white", fontSize:17, fontWeight:"500"}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PhoneNumberScreen;
