import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
      style={[
        styles.container,
        {
          borderWidth: active ? 2 : 1,
          borderColor: active ? "#a32f96" : "#e5e7ee",
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://www.1001spirits.com/tuotekuvat/600x600/Coca%20Cola%20Classic%2024x0%2C33%20l.png",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{productData.name}</Text>
        <Text style={styles.description}>{productData.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{productData.price} DH</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() =>
                productNumber > 0 && setProductNumber(productNumber - 1)
              }
            >
              <AntDesign name="minus" size={18} color="black" />
            </TouchableOpacity>
            <Text style={styles.counter}>{productNumber}</Text>
            <TouchableOpacity
              style={styles.counterButton}
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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 200,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  imageContainer: {
    height: "100%",
    width: 150,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "97%",
    width: 100,
    borderRadius: 10,
  },
  detailsContainer: {
    paddingVertical: 18,
    paddingHorizontal: 5,
    flex: 1,
  },
  title: {
    fontSize: 23,
    fontWeight: "500",
    marginBottom: 8,
  },
  description: {
    color: "#a790b4",
    flexWrap: "wrap",
    flexShrink: 1,
    fontSize: 12,
  },
  priceContainer: {
    position: "absolute",
    bottom: 17,
    flexDirection: "row",
    gap: 40,
  },
  price: {
    color: "#a32f96",
    fontWeight: "400",
  },
  counterContainer: {
    flexDirection: "row",
    gap: 10,
  },
  counterButton: {
    backgroundColor: "#f3f4f9",
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  counter: {
    borderWidth: 1,
    width: 34,
    height: 24,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 3,
    borderColor: "#a790b4",
  },
});

export default Product;
