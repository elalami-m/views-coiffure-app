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
  CountryItem,
  CountryPicker,
} from "react-native-country-codes-picker";

const PhoneNumberInput = ({ style }: { style?: ViewStyle }) => {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState<number>();
  const [countryCode, setCountryCode] = useState<CountryItem>({
    dial_code: "+212",
    flag: "🇲🇦",
  } as CountryItem);

  return (
    <View style={{ display: "flex", ...style }}>
      <CountryPicker
        show={show}
        pickerButtonOnPress={(item) => {
          setCountryCode(item);
          setShow(false);
        }}
        enableModalAvoiding
        inputPlaceholder="Enter here"
        lang="en"
        onBackdropPress={() => setShow(false)}
        style={{modal:styles.countryPicker}}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.countryCodeContainer}
          onPress={() => setShow(true)}
        >
          <Text style={styles.countryFlag}>{countryCode?.flag}</Text>
          <Text style={styles.countryCode}>{countryCode?.dial_code}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TextInput
          style={styles.phoneNumberInput}
          keyboardType="number-pad"
          placeholder="Enter your number"
          placeholderTextColor={"#4e515a"}
          onChangeText={(value) => setNumber(Number(value))}
          maxLength={10}
          keyboardAppearance="dark"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#2d3039",
    borderRadius: 10,
    gap: 7,
    alignItems: "center",
  },
  countryCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    gap: 5,
  },
  countryFlag: {
    color: "white",
  },
  countryCode: {
    color: "white",
  },
  divider: {
    backgroundColor: "#4e515a",
    width: 1,
    height: 35,
  },
  phoneNumberInput: {
    height: 55,
    color: "white",
    fontSize:19
  },
  countryPicker: {
      marginTop: 200,
  },
});

export default PhoneNumberInput;
