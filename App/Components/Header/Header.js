import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Colors from "../../Config/Colors";
import Constants from "expo-constants";
function Header(props) {
  return (
    <View
      style={{
        justifyContent: "center",
      }}
    >
      <View style={styles.ViewSearchMenu}>
        <View
          style={{
            width: "15%",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require("../../../assets/photo-256.png")}
              style={{ width: null, resizeMode: "contain", height: 30 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "70%",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
            
              fontWeight: "bold",
              color: "white",
            }}
          >
            Travel Exclusive
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  
  ViewSearchMenu: {
    height: 63,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    borderBottomColor: "#dfe4fe",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
  },
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Header;
