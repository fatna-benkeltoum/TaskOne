import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import Footer from "../../Components/Footer/Footer";
import Colors from "../../Config/Colors";
import {
  Feather as Icon,
  FontAwesome as FAIcon,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Constants from "expo-constants";
import Heart from "../../Components/Hearts/Heart";

function AllVoyageFavoris(props) {
  const [isFavourite, setFavourite] = useState(false);
   const [VoyageVavoris] = useState([
     {
       CityName: "Casablanca",
       Time: "4 jours/4 nuits",
       Date: "18/10/2022",
       Description: "Lorem ipsum dolor sit amet...",
       CityImage:
         "https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       CityName: "Marrakech",
       Time: "4 jours/4 nuits",
       Date: "18/10/2022",
       Description: "Lorem ipsum dolor sit amet...",
       CityImage:
         "https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       CityName: "Agadir",
       Time: "4 jours/4 nuits",
       Description: "Lorem ipsum dolor sit amet...",
       Date: "18/10/2022",
       CityImage:
         "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       CityName: "Fes",
       Time: "4 jours/4 nuits",
       Date: "18/10/2022",
       Description: "Lorem ipsum dolor sit amet...",
       CityImage:
         "https://images.pexels.com/photos/3525903/pexels-photo-3525903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       CityName: "Rabat",
       Time: "4 jours/4 nuits",
       Date: "18/10/2022",
       Description: "Lorem ipsum dolor sit amet...",
       CityImage:
         "https://images.pexels.com/photos/5961950/pexels-photo-5961950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
   ]);
  return (
    <ScrollView style={{ width: "100%", height: "100%", flex: 1 }}>
      {VoyageVavoris.map((item) => (
        <View style={{ flexDirection: "row", width: "98%", height: 140 }}>
          <TouchableOpacity
            style={{
              width: 200,
              marginBottom: "10%",
              backgroundColor: "white",
              marginLeft: 7,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.44,
              shadowRadius: 10.32,
              elevation: 16,
              height: 130,
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
            }}
            onPress={() => {}}
          >
            <ImageBackground
              source={{
                uri: item.CityImage,
              }}
              imageStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              style={{
                width: "100%",
                height: 130,
                borderRadius: 10,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                  backgroundColor: "orange",
                  borderRadius: 8,
                  position: "absolute",
                  right: 10,
                  top: 10,
                  width: "19%",
                  height: "16%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 10,

                      fontWeight: "bold",
                      marginTop: "4%",
                    }}
                  >
                    500dh
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View
            style={{
              marginLeft: 15,
            }}
          >
            <View style={styles.detailsView}>
              <View style={styles.CityTitleView}>
                <Text style={styles.CityTitle}>{item.CityName}</Text>
               <Heart/>
              </View>
              <View style={styles.InformationView}>
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="update"
                    size={18}
                    color="black"
                  />
                  <Text style={styles.dateText}>{item.Time}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Fontisto name="date" size={16} color="black" />
                  <Text style={styles.dateText}>{item.Date}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

export default AllVoyageFavoris;
const styles = StyleSheet.create({

  detailsView: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  CityTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CityTitle: {
    fontSize: 16,
  },
  InformationView: {
    marginTop: 1,
    flexDirection: "column",
    fontSize: 9,
  },
  dateText: { fontSize: 15 },


 
});
