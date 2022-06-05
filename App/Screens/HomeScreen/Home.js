import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";

import Footer from '../../Components/Footer/Footer';
import Destinations from './Destinations';
import VoyagePopulaire from './VoyagePopulaire';
import Header from '../../Components/Header/Header';
import Colors from '../../Config/Colors';
import Choice from './Choice';

function Home(props) {
    return (
      <View style={styles.container}>
        <Header />
        <Choice />
        <View
          style={{
            flexDirection: "row",
            width: "100%",

            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "black",

              fontSize: 18,
              marginLeft: "4%",
              marginTop: "5%",

              color: Colors.black,

              fontWeight: "500",
            }}
          >
            Voyage Populaire
          </Text>

          <Text
            style={{
              marginTop: "5%",
              marginRight: "4%",
              fontSize: 14,
              color: Colors.primary,
            }}
           
          >
            Voir Tout
          </Text>
        </View>
        <VoyagePopulaire />
        <View style={{ flexDirection: "row", width: "100%", height: "6%" }}>
          <Text
            style={{
              color: "black",

              fontSize: 18,
              marginLeft: "4%",
              marginTop: "2%",
              width: "40%",
              color: Colors.black,
              marginRight: "20%",
              fontWeight: "500",
            }}
          >
            Destinations
          </Text>
        </View>
        <Destinations />
       
          <Footer navigation={props.navigation} screenName="Home" />
      
      </View>
    );
}
const styles = StyleSheet.create({
container:
{
  
    flex:1
    },
    image:{
        width:'100%',
        height:'100%'
    },
  
})
export default Home;