import React, {useContext} from 'react';
import logof from '../assets/logof.png';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { TouchableOpacity, TextInput, Image, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const image =require("../assets/bgf.png");

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [domain] = useState('http://192.168.88.110:8000/api/v1');



  const [fontsLoaded] = useFonts({
    JosefinSans : require("../assets/fonts/static/JosefinSans-Regular.ttf"),
    Montserrat : require("../assets/fonts/static/Montserrat-Regular.ttf"),
    LeagueGothic : require("../assets/fonts/static/LeagueGothic-Regular.ttf")
  });
  
  if (!fontsLoaded)
    return null;


  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.container}>
        <Image source={logof} style={styles.logo}/>
      </View>
      <TextInput style={[styles.TextInput, styles.shadowProp1]}
        value={email}
        placeholder='Email or Username' 
        onChangeText= {text => setEmail(text)}          
      />
      <TextInput style={[styles.TextInput, styles.shadowProp1]}
        name="password"
        autoCapitalize='none'
        autoCorrect={false}
        textContentType="newPassword"
        secureTextEntry
        enablesReturnKeyAutomatically
        value={password}
        placeholder='Password'
        onChangeText= {text => setPassword(text)}
      />
      <TouchableOpacity>
        <Text style={styles.forget} onPress={() => navigation.navigate('ForgetPass')}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.shadowProp2]} onPress={() => {
                      // navigation.navigate('Profile');
            // test the domain
        console.log(domain+'/jwt/create/');
        console.log(email);
        console.log(password);
        let body = JSON.stringify({
            email: email.toLowerCase(),
            password: password
        });

        axios.post(domain+'/jwt/create/', body, {
          headers: {
            'Content-Type': 'application/json',
          }
        }).then((response) => {
          console.log(response.data.access);
          AsyncStorage.setItem('access_token', response.data.access);

          navigation.navigate('Dashboard');
        }).catch((error) => {
              console.log(error.response.data);
              /*extract the response data key & value and set to alert*/
                let errorData = error.response.data;
                let errorString = '';
                for (const key in errorData) {
                    errorString += `${key}: ${errorData[key]}\n`;
                }
                alert(errorString);
            }
        );

      }}>
      <Text style={styles.login}> LOG-IN</Text>
      </TouchableOpacity>

      <Text style={styles.or}>
        ______________ OR _____________
      </Text>

      <View style={styles.fb}>
      <FontAwesome.Button name="facebook" backgroundColor="#3b5998" borderRadius={15}>Login with Facebook
      </FontAwesome.Button>
      </View>

      <TouchableOpacity>
        <Text style={styles.space}></Text>
      </TouchableOpacity>

      <View style={styles.gmail}>
      <FontAwesome.Button name="google" backgroundColor="#34a853" borderRadius={15}>Login with Gmail
      </FontAwesome.Button>
      </View>

      <TouchableOpacity>
        <Text style={styles.signup} onPress={() => navigation.navigate('Registration')}>New to CDO-Rents? Signup!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ImageBackground>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  image:{
    height:"100%",
    width:"100%"
  },
  logo:{
    marginTop:120,
    width: 300, 
    height: 300,
  },
  TextInput:{
    borderWidth: 1,
    borderColor: '#249EA0',
    paddingStart: 30, 
    fontFamily: 'Montserrat',
    color: '#249EA0',
    padding: 10,
    width: 270,
    height: 50,
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
    width: 250,
    padding: 5,
    marginTop: 20,
    borderRadius: 30,
    borderColor: '#1E5128'
  },
  shadowProp2:{
    shadowColor: '#171717',
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  forget:{
    marginTop: 10,
    fontSize: 17,
    paddingLeft: 150,
    fontFamily: 'Montserrat',
    color: '#F99622'

  },
  signup:{
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'Montserrat',
    color: "#fff",
    marginBottom: 30
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
  or:{
    color: "#D6CDA4",
    margin: 10
  },
  fb:{
    paddingTop: 10,
  },
  gmail:{
    paddingBottom: 0,
  },
  space:{
    marginTop: 0,
    marginBottom: 0
  },
  Button:{
    marginBottom: 10
  }
});
