import { Button, Modal, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RateOrderComponent from "../components/RateOrderComponent";
import { useState } from "react";

const RateOrderScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Modal style={styles.container} visible={modalVisible}>
        <RateOrderComponent
          closeModalFunction={() => setModalVisible(!modalVisible)}
        />
      </Modal>
      <Button title="Rate product" onPress={() => setModalVisible(true)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    // marginTop: StatusBar.currentHeight,
  },
  container: {
    height: 100,
    width: 100,
  },
});

export default RateOrderScreen;
