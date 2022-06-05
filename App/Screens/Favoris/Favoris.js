import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Colors from "../../Config/Colors";
import Choice from "../HomeScreen/Choice";
import Destinations from "../HomeScreen/Destinations";
import VoyagePopulaire from "../HomeScreen/VoyagePopulaire";
import AllVoyageFavoris from "./AllVoyageFavoris";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
function Favoris(props) {
  return (
    <View style={styles.container}>
      <Header />
      <Choice />
      <AllVoyageFavoris />
      <View style={{  height: "8%" }}>
        <Footer navigation={props.navigation} screenName="Favoris" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  image: {
    width: "100%",
    height: "100%",
  },

});
export default Favoris;
