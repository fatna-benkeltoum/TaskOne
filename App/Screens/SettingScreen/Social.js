import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";


function Social(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "72%",
        margin: "22%",
        padding: 3,
      }}
    >
      <Image
        source={require("../../../assets/whatsapp.png")}
        style={{
          width: 39,
          height: 30,
          resizeMode: "contain",
          margin: 6,
        }}
      />

      <Image
        source={require("../../../assets/facebook-logo.png")}
        style={{
          width: 39,
          height: 30,
          resizeMode: "contain",
          margin: 6,
        }}
      />
      <Image
        source={require("../../../assets/instagram.png")}
        style={{
          width: 39,
          height: 30,
          resizeMode: "contain",
          margin: 6,
        }}
      />
      <Image
        source={require("../../../assets/youtube.png")}
        style={{
          width: 39,
          height: 30,
          resizeMode: "contain",
          margin: 6,
        }}
      />
    </View>
  );
}

export default Social;
