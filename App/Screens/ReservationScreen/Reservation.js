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
  ImageBackground,
} from "react-native";

import Constants from "expo-constants";
import {
  Feather as Icon,
  FontAwesome as FAIcon,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
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
        <View style={styles.imageView}>
          <ImageBackground
            style={{ height: 200, flex: 1 }}
            source={require("../../../assets/kech.jpg")}
          />
        </View>
        <View style={styles.detailsView}>
          <View style={styles.CityTitleView}>
            <Text style={styles.productTitle}>Marrakech</Text>
            <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
              <FAIcon
                name={isFavourite ? "heart" : "heart-o"}
                color="red"
                size={22}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.InformationView}>
            <View style={{ flexDirection: "row", marginRight: "10%" }}>
              <MaterialCommunityIcons
                name="update"
                size={18}
                color="black"
                marginLeft="10%"
              />
              <Text style={styles.dateText}>4 jours/4 nuits</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Fontisto name="date" size={16} color="black" />
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
          <Pressable style={styles.login_btn}>
            <Text style={styles.login_btn_text}>Demande de reservation</Text>
          </Pressable>
        </View>
      </ScrollView>
      <View style={{ height: "7%" }}>
        <Footer navigation={props.navigation} screenName="Reservation" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   ImageView: {
    flex: 1,
 
    backgroundColor: "#fff",
  
  },
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
 
  detailsView: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  CityTitleView: {
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
  dateText: { fontSize: 16,marginLeft:10},

  buttonText: {
    fontSize: 16,
    color: "#fff",
  },

  Descriptionhearder: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
 
});
