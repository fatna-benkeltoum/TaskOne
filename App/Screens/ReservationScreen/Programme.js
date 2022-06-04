import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";

import Constants from "expo-constants";
import { Feather as Icon, FontAwesome as FAIcon } from "@expo/vector-icons";
function Programme(props) {
  const [productDescription] = useState(
    `\n\.Lorem ipsum dolor sit amet, ipsum blandit at.  Lorem ipsum congue, ., lacinia eft.`
  );

  const [seeFullDescription, setSeeFullDescription] = useState(false);
  return (
    <View>
      <View style={{ marginTop: 10,}}>
        <TouchableOpacity
          style={styles.productDescriptionHeader}
          onPress={() => setSeeFullDescription((prev) => !prev)}
        >
          <Text style={{  fontSize: 18 }}>
            Jour 1
          </Text>
          <TouchableOpacity
            onPress={() => setSeeFullDescription((prev) => !prev)}
          >
            {seeFullDescription ? (
              <Icon name="chevron-up" size={26} />
            ) : (
              <Icon name="chevron-down" size={26} />
            )}
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={{ padding: 10 }}>
          <Text>
            {seeFullDescription
              ? `${productDescription}`
              : `${productDescription.split("\n")[0]}`}
          </Text>
        </View>
      </View>
      
    </View>
  );
}

export default Programme;
const styles = StyleSheet.create({

  productDescriptionHeader: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#dfe4fe",
  },
 
});