import { FlatList, View } from "react-native";
import { products } from "../data/productList";
import Product from "../components/Product";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { ProductType } from "../types";

interface ProductTypeWithActiveState extends ProductType {
  active?: boolean;
}

const ProductsList = () => {
  const [procutsData, setProductsData] = useState<
    Array<ProductTypeWithActiveState>
  >([...products] as ProductTypeWithActiveState[]);

  const handleOnProdcutPress = (id: number) => {
    setProductsData((procutsData) =>
      procutsData.map((product) => {
        if (product.id === id) return { ...product, active: true };
        return { ...product, active: false };
      })
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      {/* {.map(() => {
        return <Product />;
      })} */}
      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
        data={procutsData}
        renderItem={({ item: product }) => (
          <Product
            productData={product}
            onPress={() => handleOnProdcutPress(product.id)}
            active={product.active}
          />
        )}
        style={{
          flex: 1,
          paddingHorizontal: 10,
            //   paddingVertical: 20,
          paddingBottom:20
              }}
              contentContainerStyle={{
                  paddingVertical:10
              }}
        keyExtractor={(_item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default ProductsList;
