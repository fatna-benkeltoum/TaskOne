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
              justifyContent: "center",
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
    backgroundColor: Colors.primary,
    marginTop: 22,
    width: "100%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    flexDirection: "row",
  },
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    /*   backgroundColor:Colors.primary, */
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    /*  backgroundColor:Colors.secondary, */
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default Header;
