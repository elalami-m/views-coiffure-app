import { FlatList, StyleSheet, View } from "react-native";
import { products } from "../data/productList";
import Product from "../components/Product";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { ProductType } from "../types";

interface ProductTypeWithActiveState extends ProductType {
  active?: boolean;
}

const ProductsList = () => {
  const [productsData, setProductsData] = useState<
    Array<ProductTypeWithActiveState>
  >([...products] as ProductTypeWithActiveState[]);

  const handleOnProductPress = (id: number) => {
    setProductsData((productsData) =>
      productsData.map((product) => {
        if (product.id === id) return { ...product, active: true };
        return { ...product, active: false };
      })
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={productsData}
        renderItem={({ item: product }) => (
          <Product
            productData={product}
            onPress={() => handleOnProductPress(product.id)}
            active={product.active}
          />
        )}
        style={styles.flatList}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(_item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 35,
  },
  separator: {
    height: 20,
  },
  flatList: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  contentContainer: {
    paddingVertical: 10,
  },
});

export default ProductsList;
