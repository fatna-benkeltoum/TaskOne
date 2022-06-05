import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  StyleSheet
} from "react-native";
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Social from './Social';
import Constants from "expo-constants";
import { AntDesign, Feather as Icon, FontAwesome as FAIcon, FontAwesome } from "@expo/vector-icons";
function Setting(props) {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={{ marginTop: "2%", marginLeft: "10%" }}>
          <View style={styles.InformationView}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.buttonTextT}>Compte</Text>
            </View>
            <View style={{ flexDirection: "row", textAlign: "justify" }}>
              <AntDesign name="lock1" size={35} color="grey" />
              <Text style={styles.dateTextt}>changer le mot de passe</Text>
            </View>
          
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.buttonTextT}>Autres</Text>
            </View>
            <View style={{ flexDirection: "column", marginTop: 15 }}>
              <Text style={styles.dateText}>Qui sommes nous</Text>
              <Text style={styles.dateText}>Conditions general</Text>
            </View>
          </View>
        </View>
        <Social />
        <Text style={{ justifyContent: "center", fontSize: 15,alignContent:'center',textAlign:'center' }}>
          Copyright all right reserved 2022
        </Text>
        <Footer navigation={props.navigation} screenName="Setting" />
      </View>
    );
}

export default Setting;
const styles = StyleSheet.create({
  InformationView: {
    flexDirection: "column",
    fontSize: 9,
  },
  dateTextt: { fontSize: 19, marginTop: 10 },
  dateText: { fontSize: 19, marginTop: 10 },

  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  buttonTextT: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    marginTop: 12,
  },
 
  moreProductIcon: {
    marginLeft: 10,
  },
});