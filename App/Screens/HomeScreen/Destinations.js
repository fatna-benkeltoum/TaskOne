import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";

function Destinations(props) {
  const [DestinationCountries] = useState([
    {
      CityName: "Italy",
      CityImage:
        "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      CityName: "Turkey",
      CityImage:
        "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      CityName: "France",
      CityImage:
        "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      CityName: "Espagne",
      CityImage:
        "https://images.pexels.com/photos/7647911/pexels-photo-7647911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      CityName: "Maroc",
      CityImage:
        "https://images.pexels.com/photos/5961950/pexels-photo-5961950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      CityName: "Eypte",
      CityImage:
        "https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);
  return (
    <View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          marginBottom: 20,
        }}
      >
        {DestinationCountries.map((item) => (
          <TouchableOpacity style={{ width: "33.3%" }}>
            <ImageBackground
              source={{
                uri: item.CityImage,
              }}
              imageStyle={{
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                margin: 2,
              }}
              style={{
                width: 120,
                height: 100,
                borderRadius: 10,
                margin: 5,
              }}
            >
              <ImageBackground
                source={require("../../../assets/Rectangle.png")}
                imageStyle={{
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  margin: 2,
                }}
                style={{
                  width: "100%",
                  height: 100,
                  alignItems: "center",
                  justifyContent: "center",
                 
                }}
              >
                <Text style={{ color: "white", fontSize: 17 }}>
                  {item.CityName}
                </Text>
              </ImageBackground>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default Destinations;
