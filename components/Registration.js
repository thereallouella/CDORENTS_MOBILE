import React from 'react';
import logo from '../assets/logo.png';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { TouchableOpacity, TextInput, Image, ImageBackground, StyleSheet, Text, View, } from 'react-native';
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import axios from 'axios';
import axios from '../plugins/axios';





export default function Registration({ navigation }){
    const image =require("../assets/bgf.png");

    /*const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);*/
    const [confirmpass, setConfirmPass] = useState(null);

    //according to sir darios method

    const [data, onChangeData] = useState({ 
        // to change pa ang diri
        "first_name": "",
        "last_name": "", 
        "email": "",
        "password": "",
        "re_password": ""
        
    })
    return(
        <ImageBackground source={image} style={styles.container}>
            <KeyboardAwareScrollView>
            <View style={styles.heading}>
            <Text style={styles.subtitle}>Hello!</Text>
            <Text style={styles.subtitle2}>Welcome to CDO-Rents.</Text>
            </View>
            <TextInput style={[styles.TextInput, styles.shadowProp1]}
                value={data.username}
                placeholder='First Name'
                onChangeText= {(first_name) => {
                    onChangeData({
                        ...data,
                        "first_name": first_name
                    })
                }}   
            />
            <TextInput style={[styles.TextInput, styles.shadowProp1]}
                value={data.username}
                placeholder='Last Name'
                onChangeText= {(last_name) => {
                    onChangeData({
                        ...data,
                        "last_name": last_name
                    })
                }}   
            />
            <TextInput style={[styles.TextInput, styles.shadowProp1]}
                value={data.email}
                placeholder='Email Address' 
                onChangeText= {(email) => {
                    onChangeData({
                        ...data,
                        "email": email
                    })
                }}          
            />
            
            <TextInput style={[styles.TextInput, styles.shadowProp1]}
                name="password"
                autoCapitalize='none'
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry
                enablesReturnKeyAutomatically
                value={data.password}
                placeholder='Password'
                onChangeText= {(password) => {
                    onChangeData({
                        ...data,
                        "password": password
                    })
                }}   
            />
            <TextInput style={[styles.TextInput, styles.shadowProp1]}
                name="password"
                autoCapitalize='none'
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry
                enablesReturnKeyAutomatically
                value={data.re_password}
                type="password"
                placeholder='Confirm new password' 
                onChangeText= {(re_password) => {
                    onChangeData({
                        ...data,
                        "re_password": re_password
                    })
                }}           
            />
            <TouchableOpacity style={[styles.btn, styles.shadowProp2]} onPress={() => {
                axios.post(`/auth/users/`, data).then(response => {
                    console.log(response.data);
                    navigation.navigate('Login');
                }).catch(error => {
                    console.log(error.response.data);
                })
                
            }}>
                <Text style={styles.login}>REGISTER</Text>
            </TouchableOpacity>
            <Text style={styles.or}>
                ______________ OR _____________
            </Text>
            <View style={styles.fb}>
                <FontAwesome.Button name="facebook" backgroundColor="#3b5998" borderRadius={30}>Signup with Facebook
                </FontAwesome.Button>
            </View>

            <TouchableOpacity>
                <Text style={styles.space}></Text>
            </TouchableOpacity>

            <View style={styles.gmail}>
                <FontAwesome.Button name="google" backgroundColor="#34a853" borderRadius={30}>Signup with Gmail
                </FontAwesome.Button>
            </View>
            <TouchableOpacity>
                <Text style={styles.signup} onPress={() => navigation.navigate('Login')}>Already have an Account? Login!</Text>
            </TouchableOpacity>
                <StatusBar style="auto"/>
            </KeyboardAwareScrollView>
        </ImageBackground>    
    )   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    heading:{
        marginTop: 150,
        marginLeft: 20
    },
    subtitle:{
        fontSize: 95,
        letterSpacing: 2,
        fontFamily: 'LeagueGothic',
        marginBottom: 0,
        color: '#F99622'
      },
      subtitle2:{
        fontSize: 30,
        fontFamily: 'LeagueGothic',
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
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: '#EEF2E6',
      },
      shadowProp1:{
        shadowColor: '#171717',
        shadowOffset: {width: 3, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      btn:{
        backgroundColor: '#249EA0',
        width: 150,
        padding: 10,
        marginTop: 20,
        marginLeft: 118,
        borderRadius: 30,
        borderColor: '#1E5128',
        justifyContent:'center',
        alignItems:'center',
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
    input:{
        marginBottom: 0
    },
    or:{
        color: "#D6CDA4",
        margin: 10,
        textAlign:'center'
    },
    fb:{
        paddingTop: 0,
        width: 180,
        marginLeft: 100,
        alignItems: 'center'
    },
    gmail:{
        paddingBottom: 0,
        width: 180,
        marginLeft: 100,
        alignItems: 'center'
    },
    space:{
        marginTop: 0,
        marginBottom: 0
    },
    signup:{
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20,
        fontFamily: 'Montserrat',
        color: "#fff",
        marginBottom: 30,
        textAlign: 'center'
      },
});