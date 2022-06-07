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
import {
  Feather as Icon,
  FontAwesome as FAIcon,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function Heart(props) {
  const [isFavourite, setFavourite] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
        <FAIcon
          name={isFavourite ? "heart" : "heart-o"}
          color="#E22712"
          size={22}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Heart;
