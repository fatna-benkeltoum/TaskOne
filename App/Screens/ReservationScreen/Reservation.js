import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Pressable,
  
} from "react-native";

import Constants from "expo-constants";
import { Feather as Icon, FontAwesome as FAIcon } from "@expo/vector-icons";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Programme from "./Programme";
export default function Reservation(props) {
 
  const [isFavourite, setFavourite] = useState(false);
 
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("#fff");
  }, []);

 
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={{ height: 300, resizeMode: "repeat" }}
            source={require("../../../assets/kech.jpg")}
          />
        </View>
        <View style={styles.detailsView}>
          <View style={styles.productTitleView}>
            <Text style={styles.productTitle}>Casablanca</Text>
            <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
              <FAIcon
                name={isFavourite ? "heart" : "heart-o"}
                color="red"
                size={22}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.InformationView}>
            <View style={{ flexDirection: "row" }}>
              <FAIcon name="user" color="grey" size={22} />
              <Text style={styles.dateText}>4 jours/4 nuits</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <FAIcon name="user" color="grey" size={22} />
              <Text style={styles.dateText}>18/10/2022</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <FAIcon name="user" color="grey" size={22} />
              <Text style={styles.dateText}>30 places</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <TouchableOpacity style={styles.Descriptionhearder}>
            <Text style={{ fontSize: 18 }}>Description</Text>
          </TouchableOpacity>
          <View style={{ padding: 10 }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
              ornare urna. Duis egestas ligula quam, ut tincidunt ipsum blandit
              at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 10,
            }}
          >
            Programme:
          </Text>
          <View>
            <Programme />
          </View>
        </View>
        <View style={{ height: 40 }}></View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: "34%",
            marginBottom: 50,
          }}
        >
          <Pressable
            style={styles.login_btn}
          
          >
            <Text style={styles.login_btn_text}>Demande de reservation</Text>
          </Pressable>
        </View>
        <View style={{ height: "1%" }}>
          <Footer navigation={props.navigation} screenName="Reservation" />
        </View>
      </ScrollView>
    </View>
  );
}

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
    fontSize: 24,
  },
  InformationView: {
    marginTop: 10,
    flexDirection: "column",
  },
  dateText: { fontSize: 16 },

  buttonText: {
    fontSize: 16,
    color: "#fff",
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
