import React from 'react';
import logof from '../assets/logof.png';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { TouchableOpacity, TextInput, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function PassConfirm({ navigation }){
    const image =require("../assets/bgf.png");

    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    return(
        <ImageBackground source={image} style={styles.container}>
            <View style={styles.container}>
                <Image source={logof} style={styles.logo}/>
            </View>
            <View style={styles.subcont}>
            <Text style={styles.subtitle}>RESETTING PASSWORD</Text>
            <Text style={styles.subtitle2}>{'\n'} You can now create a new password. Dont forget it next time!</Text>
            <TextInput style={[styles.TextInput, styles.shadowProp1]}
                name="password"
                autoCapitalize='none'
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry
                enablesReturnKeyAutomatically
                value={password}
                placeholder='Create new password'
                onChangeText= {text => setPassword(text)}
            />
            <TextInput style={[styles.TextInput, styles.shadowProp1]}
                name="password"
                autoCapitalize='none'
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry
                enablesReturnKeyAutomatically
                value={confirmpassword}
                type="password"
                placeholder='Confirm new password' 
                onChangeText= {text => setConfirmPassword(text)}        
            />
            <TouchableOpacity style={[styles.btn, styles.shadowProp2]}>
                <Text style={styles.login} onPress={() => navigation.navigate('Login')}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.signup} onPress={() => navigation.navigate('Login')}>Already have an Account? Login!</Text>
            </TouchableOpacity>
            </View>
            <StatusBar style="auto"/>
        </ImageBackground>    
    )   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    subcont:{
      marginBottom: 250,
      alignItems:'center'
    },
    logo:{
        width: 200, 
        height: 200,
        position: 'absolute',
        top: 650,
        right: 0
    },
    subtitle:{
        fontSize: 65,
        marginBottom: -30,
        letterSpacing: 0,
        fontFamily: 'LeagueGothic',
        fontWeight: '500',
        color: '#F99622'
    },
    subtitle2:{
        fontFamily: 'LeagueGothic',
        marginBottom: 0,
        fontSize: 22,
        textAlign:'center',
        color: '#F99622'
    },
    TextInput:{
      borderWidth: 1,
      borderColor: '#249EA0',
      paddingStart: 30, 
      fontFamily: 'Montserrat',
      color: '#249EA0',
      padding: 10,
      width: 330,
      height: 50,
      marginTop: 20,
      borderRadius: 15,
      backgroundColor: '#EEF2E6',
    },
    shadowProp1:{
        shadowColor: '#171717',
        shadowOffset: {width: 5, height: 8},
        shadowOpacity: 0.32,
        shadowRadius: 3,
    },
    btn:{
      backgroundColor: '#249EA0',
      width: 150,
      height: 45,
      padding: 5,
      marginTop: 10,
      borderRadius: 20,
      borderColor: '#1E5128'
    },
    shadowProp2:{
      shadowColor: '#171717',
      shadowOffset: {width: 3, height: 5},
      shadowOpacity: 0.5,
      shadowRadius: 3,
    },
    login:{
      fontFamily:'JosefinSans',
      color: 'white',
      fontWeight: '500',
      fontSize: 20,
      letterSpacing: 2,
      textAlign: 'center',
      justifyContent: 'center'
    },
    signup:{
        marginTop: 50,
        marginBottom: 10,
        fontSize: 20,
        fontFamily: 'Montserrat',
        color: "#249EA0"
    },
});