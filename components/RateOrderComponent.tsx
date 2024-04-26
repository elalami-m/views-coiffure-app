import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type RateOrderComponentPropsTypes = {
  closeModalFunction: () => void;
};

const RateOrderComponent = ({
  closeModalFunction,
}: RateOrderComponentPropsTypes) => {
  const { height } = Dimensions.get("screen");
  const [serviceRate, setServiceRate] = useState<number>(0);
  const [courierRate, setCourierRate] = useState<number>(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ marginBottom: 20 }}
        onPress={closeModalFunction}
      >
        <MaterialIcons name="cancel" size={34} color="black" />
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          gap: 30,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "900",
          }}
        >
          Rate your order
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 100,
          paddingTop: 30,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 30,
            }}
          >
            How was your courier,{"  "}
            <Text
              style={{
                fontWeight: "800",
              }}
            >
              Abdelhak
            </Text>
          </Text>
          <View
            style={{
              gap: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 140, height: 140, borderRadius: 100 }}
              source={{
                uri: "https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
              }}
            />
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <TouchableOpacity
                    key={item}
                    onPress={() => setCourierRate(item)}
                  >
                    <AntDesign
                      name={item <= courierRate ? "star" : "staro"}
                      size={27}
                      color={item <= courierRate ? "#ffc244" : "black"}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 30,
            }}
          >
            How was your courier,{"  "}
            <Text
              style={{
                fontWeight: "800",
              }}
            >
              Glovo
            </Text>
          </Text>
          <View
            style={{
              gap: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 140, height: 140, borderRadius: 100 }}
              source={{
                uri: "https://fnh.ma/uploads/actualites/61e68be888204_Glovo-Maroc.jpg",
              }}
            />
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <TouchableOpacity onPress={() => setServiceRate(item)}>
                    <AntDesign
                      name={item <= serviceRate ? "star" : "staro"}
                      size={27}
                      color={item <= serviceRate ? "#ffc244" : "black"}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingHorizontal: 15,
  },
  cancelView: {},
});

export default RateOrderComponent;
