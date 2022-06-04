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
import { Feather as Icon, FontAwesome as FAIcon } from "@expo/vector-icons";
function VoyagePopulaire(props) {
  const [isFavourite, setFavourite] = useState(false);
  return (
    <View>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsVerticalScrollIndicator={true}
        style={{ width: "100%", height: "30%" }}
      >
        <TouchableOpacity
          style={{
            width: 220,
            marginBottom: "10%",
            backgroundColor: "#D4D4D4",
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
            height: 230,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <ImageBackground
            source={require("../../../assets/kech.jpg")}
            imageStyle={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            style={{
              width: "100%",
              height: 140,
              borderRadius: 10,
              flexDirection: "row",
            }}
          ></ImageBackground>

          <View
            style={{
              flexDirection: "row",

              marginBottom: 15,
              height: "100%",
            }}
          >
            <View style={styles.detailsView}>
              <View style={styles.productTitleView}>
                <Text style={styles.productTitle}>Casablanca</Text>
                <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
                  <FAIcon
                    name={isFavourite ? "heart" : "heart-o"}
                    color="red"
                    size={22}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.InformationView}>
                <View style={{ flexDirection: "row" }}>
                  <FAIcon name="user" color="grey" size={22} />
                  <Text style={styles.dateText}>4 jours/4 nuits</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <FAIcon name="user" color="grey" size={22} />
                  <Text style={styles.dateText}>18/10/2022</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: "50%",
                width: "10%",
                marginTop: "1%",
              }}
            ></View>
          </View>

          <View style={{ width: "100%" }}>
            <Text
              style={{
                textAlign: "left",
                paddingTop: "5%",
                paddingBottom: "5%",
                fontSize: 18,
                marginLeft: "10%",
              }}
            ></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 220,
            marginBottom: "10%",
            backgroundColor: "#D4D4D4",
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
            height: 230,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <ImageBackground
            source={require("../../../assets/kech.jpg")}
            imageStyle={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            style={{
              width: "100%",
              height: 140,
              borderRadius: 10,
              flexDirection: "row",
            }}
          ></ImageBackground>

          <View
            style={{
              flexDirection: "row",

              marginBottom: 15,
              height: "100%",
            }}
          >
            <View style={styles.detailsView}>
              <View style={styles.productTitleView}>
                <Text style={styles.productTitle}>Casablanca</Text>
                <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
                  <FAIcon
                    name={isFavourite ? "heart" : "heart-o"}
                    color="red"
                    size={22}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.InformationView}>
                <View style={{ flexDirection: "row" }}>
                  <FAIcon name="user" color="grey" size={22} />
                  <Text style={styles.dateText}>4 jours/4 nuits</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <FAIcon name="user" color="grey" size={22} />
                  <Text style={styles.dateText}>18/10/2022</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: "50%",
                width: "10%",
                marginTop: "1%",
              }}
            ></View>
          </View>

          <View style={{ width: "100%" }}>
            <Text
              style={{
                textAlign: "left",
                paddingTop: "5%",
                paddingBottom: "5%",
                fontSize: 18,
                marginLeft: "10%",
              }}
            ></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 220,
            marginBottom: "10%",
            backgroundColor: "#D4D4D4",
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
            height: 230,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <ImageBackground
            source={require("../../../assets/kech.jpg")}
            imageStyle={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            style={{
              width: "100%",
              height: 140,
              borderRadius: 10,
              flexDirection: "row",
            }}
          ></ImageBackground>

          <View
            style={{
              flexDirection: "row",

              marginBottom: 15,
              height: "100%",
            }}
          >
            <View style={styles.detailsView}>
              <View style={styles.productTitleView}>
                <Text style={styles.productTitle}>Casablanca</Text>
                <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
                  <FAIcon
                    name={isFavourite ? "heart" : "heart-o"}
                    color="red"
                    size={22}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.InformationView}>
                <View style={{ flexDirection: "row" }}>
                  <FAIcon name="user" color="grey" size={22} />
                  <Text style={styles.dateText}>4 jours/4 nuits</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <FAIcon name="user" color="grey" size={22} />
                  <Text style={styles.dateText}>18/10/2022</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: "50%",
                width: "10%",
                marginTop: "1%",
              }}
            ></View>
          </View>

          <View style={{ width: "100%" }}>
            <Text
              style={{
                textAlign: "left",
                paddingTop: "5%",
                paddingBottom: "5%",
                fontSize: 18,
                marginLeft: "10%",
              }}
            ></Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default VoyagePopulaire;
const styles = StyleSheet.create({
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
  header: {
    height: 50,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    borderBottomColor: "#dfe4fe",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
  },
  detailsView: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  productTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productTitle: {
    fontSize: 16,
  },
  InformationView: {
    marginTop: 1,
    flexDirection: "column",
    fontSize:9
  },
  dateText: { fontSize: 15 },

  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  tag: {
    borderRadius: 4,
    backgroundColor: "#FFF",
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabel: {
    color: "#333",
  },
  tagSelected: {
    backgroundColor: "#333",
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabelSelected: {
    color: "#FFF",
  },
  Descriptionhearder: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  moreProductImageView: {
    flex: 1,
    height: 240,
    backgroundColor: "#fff",
    borderRadius: 4,
    overflow: "hidden",
  },
  moreProductName: {
    fontSize: 16,
  },
  moreInformationView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  moreProductPrice: {
    fontSize: 16,
  },
  moreProductIcon: {
    marginLeft: 10,
  },
  moreProductBuyButton: {
    backgroundColor: "#111",
    marginTop: 10,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  moreProductBuyButtonText: {
    color: "#fff",

    fontSize: 18,
  },
});
