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
        <View style={{ flexDirection: "row", width: "100%", height: "8%" }}>
          <Text
            style={{
              color: "black",

              fontSize: 18,
              marginLeft: "4%",
              marginTop: "5%",
              width: "50%",
              color: Colors.black,
              marginRight: "20%",
              fontWeight: "500",
            }}
          >
            Voyage Populaire
          </Text>

          <Text
            style={{
              marginTop: "5%",

              fontSize: 14,
              color: Colors.primary,
            }}
            onPress={() => {}}
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
    closeIcon:{
        width:50,
        height:50,
      /*   backgroundColor:Colors.primary, */
        position:'absolute',
        top:40,
        left:30
    },
    deleteIcon:{
        width:50,
        height:50,
       /*  backgroundColor:Colors.secondary, */
        position:'absolute',
        top:40,
       right:30
   
    }
})
export default Home;