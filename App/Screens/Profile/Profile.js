import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Footer from '../../Components/Footer/Footer';

import Header from '../../Components/Header/Header';
import Colors from '../../Config/Colors';


function Profile(props) {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={styles.container}>
          <Image
            source={require("../../../assets/userprofile.png")}
            style={{
              width: 150,
              height: 150,
              marginTop: "20%",
              borderRadius: 100,
            }}
          />
          <TouchableOpacity
            style={{ top: -30, marginLeft: "15%" }}
            onPress={() => {
              /*   this.handleImage(); */
            }}
          >
            <Image
              source={require("../../../assets/edit.png")}
              style={{
                width: 25,
                height: 25,

                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <Text style={styles.txt_name}>Nom-prenom</Text>
          <View
            style={{
              marginRight: "10%",
              
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                
                marginLeft: 9,
              }}
            >
              <View
                style={{
                  borderRadius: 10,
                  marginLeft: "5%",
                  marginRight: "5%",
                  width: "40%",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    paddingTop: "10%",
                    paddingBottom: "10%",
                    paddingLeft: 5,
                  }}
                >
                  Email:
                </Text>
              </View>

              <TextInput
                placeholder="xxxxxx@gmail.com"
                style={{
                  color: "#3E3F68",
                  borderWidth: 1,
                  marginLeft: "5%",
                  borderColor: "grey",
                  width: "55%",
                  backgroundColor: "#F4F4F4",
                  borderRadius: 6,
                  paddingLeft: 8,
                }}
              />
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
               
                marginLeft: 9,
              }}
            >
              <View
                style={{
                  borderRadius: 10,
                  marginLeft: "5%",
                  marginRight: "5%",
                  width: "40%",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    paddingTop: "10%",
                    paddingBottom: "10%",
                    paddingLeft: 5,
                  }}
                >
                  Adresse:
                </Text>
              </View>

              <TextInput
                placeholder="xxxxxx"
                style={{
                  color: "#3E3F68",
                  borderWidth: 1,
                  marginLeft: "5%",
                  borderColor: "grey",
                  width: "55%",
                  backgroundColor: "#F4F4F4",
                  borderRadius: 6,
                  paddingLeft: 8,
                }}
              />
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                
                marginLeft: 9,
              }}
            >
              <View
                style={{
                  borderRadius: 10,
                  marginLeft: "5%",
                  marginRight: "5%",
                  width: "40%",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    paddingTop: "10%",
                    paddingBottom: "10%",
                    paddingLeft: 5,
                  }}
                >
                  Tele:
                </Text>
              </View>

              <TextInput
                placeholder="066666666666"
                style={{
                  color: "#3E3F68",
                  borderWidth: 1,
                  marginLeft: "5%",
                  borderColor: "grey",
                  width: "55%",
                  backgroundColor: "#F4F4F4",
                  borderRadius: 6,
                  paddingLeft: 8,
                }}
              />
            </View>
          </View>
          <View
            style={{
              height: "80%",
              paddingTop: "2%",
              paddingBottom: "4%",
              marginRight: "58%",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Mes favoris
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Reservation")}
            >
              <ImageBackground
                source={require("../../../assets/kech.jpg")}
                imageStyle={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                style={{
                  width: 128,
                  height: 135,
                  margin: 5,
                  borderRadius: 10,
                }}
              >
                <View style={styles.ViewBtnEdit}>
                  <Text
                    style={{
                      color: "white",

                      width: "50%",
                      left: 3,
                      marginTop: "65%",
                      fontWeight: "bold",
                      fontSize: 16,
                      marginLeft: "43%",
                      backgroundColor: "orange",
                      borderRadius: 15,
                      paddingLeft: 3,
                    }}
                  >
                    500dh
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: "7%" }}>
          <Footer navigation={props.navigation} screenName="Profile" />
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  ViewBtnEdit: {
    width: "100%",
    position: "relative",
    top: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
 
  txt_name: {
    fontSize: 20,
    marginTop: "-6%",
    color: "#222455",
  },
});
export default Profile;
