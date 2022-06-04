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
import { Feather as Icon, FontAwesome as FAIcon } from "@expo/vector-icons";
function Setting(props) {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={{ marginTop: "2%", marginLeft: "10%" }}>
          <View style={styles.InformationView}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.buttonTextT}>Compte</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <FAIcon name="user" color="grey" size={22} />
              <Text style={styles.dateText}>changer le mot de passe</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.buttonTextT}>Autres</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <FAIcon name="user" color="grey" size={22} />
              <Text style={styles.dateText}>Qui sommes nous</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <FAIcon name="user" color="grey" size={22} />
              <Text style={styles.dateText}>Conditions general</Text>
            </View>
          </View>
        </View>
        <Social />
        <Text style={{ justifyContent: "center", fontSize: 12 }}>
          Copyright all right reserved 2022
        </Text>
        <Footer navigation={props.navigation} screenName="Setting" />
      </View>
    );
}

export default Setting;
const styles = StyleSheet.create({
  login_btn: {
    marginLeft: "50%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: " 4%",
    paddingHorizontal: "8%",
    borderRadius: 15,
    backgroundColor: "orange",
    width: "120%",
  },
  login_btn_text: {
    fontSize: 16,

    color: "white",
  },
  header: {
    height: 50,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    borderBottomColor: "#dfe4fe",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
  },
  detailsView: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  productTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productTitle: {
    fontSize: 16,
  },
  InformationView: {
   
    flexDirection: "column",
    fontSize: 9,
  
  },
  dateText: { fontSize: 15 },

  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  buttonTextT: {
    fontSize: 22,
    color: "black",
    fontWeight:'bold',marginTop:12,
    
  },
  tag: {
    borderRadius: 4,
    backgroundColor: "#FFF",
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabel: {
    color: "#333",
  },
  tagSelected: {
    backgroundColor: "#333",
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabelSelected: {
    color: "#FFF",
  },
  Descriptionhearder: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  moreProductImageView: {
    flex: 1,
    height: 240,
    backgroundColor: "#fff",
    borderRadius: 4,
    overflow: "hidden",
  },
  moreProductName: {
    fontSize: 16,
  },
  moreInformationView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  moreProductPrice: {
    fontSize: 16,
  },
  moreProductIcon: {
    marginLeft: 10,
  },
  moreProductBuyButton: {
    backgroundColor: "#111",
    marginTop: 10,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  moreProductBuyButtonText: {
    color: "#fff",

    fontSize: 18,
  },
});