
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function Footer(props) {
  const [TabLinks, setTabLinks] = useState([
    {
      item_id: 0,
      item_text: "Home",
      screen_name: "Home",
    },
    {
      item_id: 1,
      item_text: "Favoris",
      screen_name: "Favoris",
    },

    {
      item_id: 2,
      item_text: "Setting",
      screen_name: "Setting",
    },
    {
      item_id: 3,
      item_text: "Profile",
      screen_name: "Profile",
    },
  ]);
  //#a4b0be
  const HandleIcons = (icon_key, color) => {
    if (icon_key == 0) {
      return <Entypo name="home" size={27} color={color} />;
    } else if (icon_key == 1) {
      return <Entypo name="heart" size={27} color={color} />;
   
    } else if (icon_key == 2) {
        return <Feather name="settings" size={27} color={color} />;
    
    } else if (icon_key == 3) {
        return <AntDesign name="user" size={27} color={color} />;
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        height: "20%",
        width: "100%",
        flexDirection: "row",
    
      }}
    >
      {TabLinks.map((item) => {
        if (props.screenName == item.screen_name) {
          return (
            <TouchableOpacity
              style={{
                width: "20%",
                height: "100%",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              key={item.item_id}
              onPress={() => {
                props.navigation.navigate(item.screen_name);
              }}
            >
              {/*  <Entypo name="home" size={27} color="#a4b0be" /> */}
              {HandleIcons(item.item_id, "#0652DD")}
              <Text style={{ color: "#0652DD" }}>{item.item_text}</Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              style={{
                width: "20%",
                height: "100%",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              key={item.item_id}
              onPress={() => {
                props.navigation.navigate(item.screen_name);
              }}
            >
              {/*  <Entypo name="home" size={27} color="#a4b0be" /> */}
              {HandleIcons(item.item_id, "#a4b0be")}
              <Text style={{ color: "#a4b0be" }}>{item.item_text}</Text>
            </TouchableOpacity>
          );
        }
      })}
    
    </View>
  );
}
export default Footer;
