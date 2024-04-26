import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import {
  CountryButton,
  CountryItem,
  CountryList,
  CountryPicker,
  countryCodes,
} from "react-native-country-codes-picker";

const PhoneNumberInput = ({ style }: { style?: ViewStyle }) => {
  const [show, setShow] = useState(true);
  const [number, setNumber] = useState<number>();
  const [countrCode, setCountryCode] = useState<CountryItem>({
    dial_code: "+212",
    flag: "🇲🇦",
  } as CountryItem);

  return (
    <View style={{ display: "flex", ...style }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#2d3039",
          borderRadius: 10,
          gap: 7,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            // backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 8,
            gap: 5,
          }}
          onPress={() => setShow(true)}
        >
          <Text style={{ color: "white" }}>{countrCode?.flag}</Text>
          <Text style={{ color: "white" }}>{countrCode?.dial_code}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
        </TouchableOpacity>
        <View
          style={{ backgroundColor: "#4e515a", width: 1, height: 35 }}
        ></View>
        <TextInput
          style={{
            height: 55,
            color: "white",
            // backgroundColor: "red",
          }}
          keyboardType="number-pad"
          placeholder="Enter your number"
          placeholderTextColor={"#4e515a"}
                  onChangeText={(value) => setNumber(Number(value))}
                  maxLength={10}
        />
      </View>

      <CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          console.log(item);

          setCountryCode(item);
          setShow(false);
        }}
        enableModalAvoiding
        inputPlaceholder="Entre here"
        lang="en"
        onBackdropPress={() => setShow(false)}
        style={{
          modal: {
            marginTop: 200,
          },
        }}
      />
    </View>
  );
};

export default PhoneNumberInput;
