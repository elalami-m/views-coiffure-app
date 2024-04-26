import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
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

const ConfirmCodeInput = ({ style }: { style?: ViewStyle }) => {
  const [show, setShow] = useState(true);
  const [number, setNumber] = useState<{ [key: string]: number }>({});
  const [countrCode, setCountryCode] = useState<CountryItem>({
    dial_code: "+212",
    flag: "🇲🇦",
  } as CountryItem);

  const [focusNUmber, setFocusNumber] = useState(0);

  const textRef1 = useRef<TextInput>(null);
  const textRef2 = useRef<TextInput>(null);
  const textRef3 = useRef<TextInput>(null);
  const textRef4 = useRef<TextInput>(null);

  const [refsArray] = useState([textRef1, textRef2, textRef3, textRef4]);

  useEffect(() => {
    if (Object.keys(number).length < 4)
      refsArray[Object.keys(number).length].current?.focus();
  }, [number]);
  console.log(number);

  return (
    <View style={{ display: "flex", ...style }}>
      <View
        style={{
          flexDirection: "row",
          //   backgroundColor: "#2d3039",
          borderRadius: 10,
          gap: 13,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {refsArray.map((ref, value) => (
          <TextInput
            ref={ref}
            style={{
              height: 65,
              color: "white",
              width: 65,
              // backgroundColor: "red",
              backgroundColor: "#2d3039",
              borderRadius: 14,
              borderWidth: focusNUmber === value ? 2 : 0,
              borderColor: focusNUmber === value ? "#9db798" : "",
              //   textAlign: "center",
            }}
            onFocus={() => {
              setFocusNumber(value);
            }}
            keyboardType="number-pad"
            placeholder="─"
            placeholderTextColor={"#4e515a"}
            onChangeText={(valueL) => {
              if (valueL) setNumber({ ...number, [value]: valueL });
              else if (!valueL && number[value.toString()])
                setNumber((number) => {
                  let cpNum = { ...number };
                  delete cpNum[value];
                  return cpNum;
                });
            }}
            maxLength={1}
            multiline
            textAlign="center"
          />
        ))}
      </View>
    </View>
  );
};

export default ConfirmCodeInput;
