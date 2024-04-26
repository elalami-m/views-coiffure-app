import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { ProductType } from "../types";

type propsType = {
  productData: ProductType;
  active?: boolean;
  onPress: () => void;
};

const Product = ({ productData, onPress, active }: propsType) => {
  const [productNumber, setProductNumber] = useState<number>(0);
  return (
    <Pressable
      style={{
        width: "100%",
        flexDirection: "row",
        // backgroundColor: "black",
        height: 200,
        borderWidth: active ? 2 : 1,
        borderColor: active ? "#a32f96" : "#e5e7ee",
        borderRadius: 10,
      }}
      onPress={onPress}
    >
      <View
        style={{
          height: "100%",
          width: 150,
          padding: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://www.1001spirits.com/tuotekuvat/600x600/Coca%20Cola%20Classic%2024x0%2C33%20l.png",
          }}
          style={{ height: "97%", width: 100, borderRadius: 10 }}
        />
      </View>
      <View
        style={{
          paddingVertical: 18,
          width: "100%",
          paddingHorizontal: 5,
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 23, fontWeight: "500", marginBottom: 8 }}>
          {productData.name}
        </Text>
        <Text
          style={{
            color: "#a790b4",
            flexWrap: "wrap",
            flexShrink: 1,
            fontSize: 12,
          }}
        >
          {productData.description}
        </Text>
        <View
          style={{
            position: "absolute",
            bottom: 17,
            flexDirection: "row",
            gap: 40,
          }}
        >
          <Text style={{ color: "#a32f96", fontWeight:"400" }}>{productData.price} DH</Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#f3f4f9",
                width: 24,
                height: 24,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
              onPress={() =>
                productNumber > 0 && setProductNumber(productNumber - 1)
              }
            >
              <AntDesign name="minus" size={18} color="black" />
            </TouchableOpacity>
            <Text
              style={{
                borderWidth: 1,
                width: 34,
                height: 24,
                textAlign: "center",
                textAlignVertical: "center",
                borderRadius: 3,
                borderColor: "#a790b4",
              }}
            >
              {productNumber}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#f3f4f9",
                width: 24,
                height: 24,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
              onPress={() => setProductNumber(productNumber + 1)}
            >
              <AntDesign name="plus" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Product;
