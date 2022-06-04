import React from 'react';
import { View, Text, TouchableOpacity,ScrollView,ImageBackground,Image,Pressable,StyleSheet } from "react-native";
import Colors from '../../Config/Colors';
function Choice(props) {
    return (
        <View style={{ flexDirection: "row", width: "100%", height: "10%" }}>
         
    
  
<Pressable
    style={styles.login_btn}
 onPress={() => this.props.navigation.navigate("HelloThree")}
 >
 <Text style={styles.login_btn_text}>
  Destination
 </Text>
</Pressable>
<Pressable
    style={styles.login_btn}
 onPress={() => this.props.navigation.navigate("HelloThree")}
 >
 <Text style={styles.login_btn_text}>
 Depart-arrivee
 </Text>
</Pressable>
<Pressable
    style={styles.Search_button}
 onPress={() => this.props.navigation.navigate("HelloThree")}
 >
 <Text style={styles.login_btn_text}>
  Search
 </Text>
</Pressable>
        </View>
        
    );
}
const styles = StyleSheet.create({
login_btn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: Colors.secondary,
    marginLeft: "4%",
    marginTop: "5%",
    width: "28%",
  
    height:40

  },

  login_btn_text: {
    fontSize: 13,
    color: "black",
    color:'grey'
  },
  Search_button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor:'orange',
    marginLeft: "4%",
    marginTop: "5%",
    width: "28%",
  
    height:40

  },
  Search_btn_text: {
    fontSize: 13,
  
    color:'white'
  },
});
export default Choice;