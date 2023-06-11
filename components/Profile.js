import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

export default function Owner({ navigation }){
    const image =require("../assets/bgf.png");
    return(
        <ImageBackground source={image} style={styles.container}>
          <View >

          </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    image:{
      height:"100%",
      width:"100%"
    },
    imageContainer:{
      marginTop: 150,
      height: 510,
      width: 320,
      backgroundColor: '#EEF2FF',
      borderRadius: 21,
      elevation: 3,
    },
    imagestyle:{
      height:160, 
      width:'100%',
      borderTopLeftRadius:20,
      borderTopRightRadius:20
    },
    avatar:{
      height: '100%',
      width: '100%',
      borderRadius: 60,
    },
    avatarContainer:{
      height: 128,
      width: 128,
      alignSelf: 'center',
      position: 'absolute',
      top: 100,
    },
    textContainer:{
      height: 200,
      width: 300,
      position: 'absolute',
      top: 220,
      left: 15,
      alignItems: 'center',
    },
    text:{
      alignSelf: 'center',
      fontSize: 25,
      lineHeight: 100,
      letterSpacing: 0,
      fontFamily: 'Montserrat',
    },
    sectionContainer:{
      height: 200,
      width: 300,
      position: 'absolute',
      top: 240,
      left: 15,
      alignItems: 'center',
    },
    section:{
      alignSelf: 'center',
      fontSize: 18,
      lineHeight: 100,
      letterSpacing: 2,
      fontFamily: 'Montserrat',
    },
    icon:{
      height: 200,
      width: 300,
      position: 'absolute',
      top: 150,
      left: 10,
      fontSize: 40,
    },
    fb:{
      height: 200,
      width: 300,
      position: 'absolute',
      top: 165,
      left: 60,
      fontSize: 20,
      fontFamily: 'JosefinSans',
    },
    iconinsta:{
      height: 200,
      width: 300,
      position: 'absolute',
      top: 200,
      left: 10,
      fontSize: 40,
    },
    insta:{
      height: 200,
      width: 300,
      position: 'absolute',
      top: 215,
      left: 60,
      fontSize: 20,
      fontFamily: 'JosefinSans',
    },
    icongmail:{
      height: 200,
      width: 300,
      position: 'absolute',
      top: 250,
      left: 10,
      fontSize: 40,
    },
    gmail:{
      height: 200,
      width: 300,
      position: 'absolute',
      top: 265,
      left: 60,
      fontSize: 20,
      fontFamily: 'JosefinSans',
    },
    iconphone:{
      height: 200,
      width: 300,
      position: 'absolute',
      top: 300,
      left: 10,
      fontSize: 40,
    },
    phone:{
      height: 200,
      width: 300,
      position: 'absolute',
      top: 315,
      left: 60,
      fontSize: 20,
      fontFamily: 'JosefinSans',
    },
    signup:{
      marginTop: 20,
      fontSize: 20,
      fontFamily: 'Montserrat',
      color: "#fff",
      marginBottom: 30,
      textAlign: 'center'
    },
});