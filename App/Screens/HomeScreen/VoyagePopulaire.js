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
import Colors from "../../Config/Colors";

import Constants from "expo-constants";
import { Feather as Icon, FontAwesome as FAIcon, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import Heart from "../../Components/Hearts/Heart";
function VoyagePopulaire(props) {
   const [PopularVoyage] = useState([
     {
       CityName: "Casablanca",
       Time: "4 jours/4 nuits",
       Date: "18/10/2022",
       Description: "Lorem ipsum dolor sit amet...",
       Id: 0,
       CityImage:
         "https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       CityName: "Marrakech",
       Time: "4 jours/4 nuits",
       Date: "18/10/2022",
       Description: "Lorem ipsum dolor sit amet...",
       Id: 1,
       CityImage:
         "https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       CityName: "Agadir",
       Time: "4 jours/4 nuits",
       Description: "Lorem ipsum dolor sit amet...",
       Date: "18/10/2022",
       Id: 2,
       CityImage:
         "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       CityName: "Fes",
       Time: "4 jours/4 nuits",
       Date: "18/10/2022",
       Description: "Lorem ipsum dolor sit amet...",
       Id: 3,
       CityImage:
         "https://images.pexels.com/photos/3525903/pexels-photo-3525903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       CityName: "Rabat",
       Time: "4 jours/4 nuits",
       Date: "18/10/2022",
       Description: "Lorem ipsum dolor sit amet...",
       Id: 4,
       CityImage:
         "https://images.pexels.com/photos/5961950/pexels-photo-5961950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
   ]);
  const [isFavourite, setFavourite] = useState(false);
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: "100%", height: "30%" }}
      >
        <View style={{ flex: 1, flexDirection: "row", paddingTop: 10 }}>
          {PopularVoyage.map((item) => (
            <View
              style={{
                width: 200,
                marginHorizontal: 10,
                backgroundColor: "#D4D4D4",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.44,
                shadowRadius: 10.32,
                elevation: 10,

                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}
              key={item.Id}
            >
              <View style={styles.ImageView}>
                <Image
                  style={{ flex: 1 }}
                  source={{
                    uri: item.CityImage,
                  }}
                />
              </View>
              <View style={{ marginTop: 8 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                 
                >
                  <Text>{item.CityName}</Text>
                 <Heart/>
                </View>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Fontisto name="date" size={16} color="black" />
                    <Text style={{ marginLeft: 4 }}>{item.Date}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <MaterialCommunityIcons
                      name="update"
                      size={18}
                      color="black"
                    />
                    <Text style={{ marginLeft: 4 }}>{item.Time}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginLeft: 4 }}>{item.Description}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default VoyagePopulaire;
const styles = StyleSheet.create({
  ImageView: {
    flex: 1,
    height: 240,
    backgroundColor: "#fff",
    borderRadius: 4,
    overflow: "hidden",
  
  },

  InformationView: {
    marginTop: 1,
    flexDirection: "column",
    fontSize: 9,
  },
  dateText: { fontSize: 15 },
 
  
});
