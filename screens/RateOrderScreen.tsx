import { Button, Image, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const RateOrderScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Modal style={styles.container} visible={modalVisible}  animationType="slide">
        <RateOrderComponent
          closeModalFunction={() => setModalVisible(!modalVisible)}
        />
      </Modal>
      <Button title="Rate product" onPress={() => setModalVisible(true)} />
    </SafeAreaView>
  );
};

type RateOrderComponentPropsTypes = {
  closeModalFunction: () => void;
};

const RateOrderComponent = ({
  closeModalFunction,
}: RateOrderComponentPropsTypes) => {
  return (
    <SafeAreaView style={styles.containerRateComponent}>
      <TouchableOpacity style={styles.cancelView} onPress={closeModalFunction}>
        <MaterialIcons name="cancel" size={34} color="black" />
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <Text style={styles.title}>Rate your order</Text>
      </View>
      <View style={styles.ratingContainer}>
        <RateCard
          courierName="Abdelhak"
          courierPic="https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        />
        <RateCard
          courierName="Glovo"
          courierPic="https://fnh.ma/uploads/actualites/61e68be888204_Glovo-Maroc.jpg"
        />
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const RateCard = ({
  courierName,
  courierPic,
}: {
  courierName: string;
  courierPic: string;
}) => {
  const [courierRate, setCourierRate] = useState<number>(0);

  return (
    <View style={styles.rateCardContainer}>
      <Text style={styles.courierText}>
        How was your courier,{"  "}
        <Text style={styles.courierName}>{courierName}</Text>
      </Text>
      <View style={styles.ratingView}>
        <Image
          style={styles.courierImage}
          source={{
            uri: courierPic,
          }}
        />
        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <TouchableOpacity key={item} onPress={() => setCourierRate(item)}>
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
  containerRateComponent: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingHorizontal: 15,
  },
  cancelView: {
    marginBottom: 20,
  },
  centeredView: {
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
  },
  ratingContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 75,
    paddingTop: 30,
  },
  rateCardContainer: {
    alignItems: "center",
  },
  courierText: {
    fontSize: 20,
    marginBottom: 30,
  },
  courierName: {
    fontWeight: "800",
  },
  ratingView: {
    gap: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  courierImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },
  starContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  submitButton: {
    height: 45,
    width: 190,
    marginTop: 30,
    backgroundColor: "#ffc244",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
  },
  submitButtonText: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default RateOrderScreen;
