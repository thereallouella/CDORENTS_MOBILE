import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Owner({ navigation, route }){
    const place = route.params;
    return(
      <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
        <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
        <ImageBackground style={{flex: 0.7}} source={place.image}>
          <View style={styles.header}>
            <MaterialCommunityIcons 
              name="arrow-left-circle" size={35} 
              color={'#fff'} 
              onPress={navigation.goBack}
              />
          </View>
          <View style={styles.imageDetails}>
            <Text style={styles.imageName}>{place.name}</Text>
          </View>
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Reservation')}>
            <View style={styles.iconContainer}>
             <MaterialCommunityIcons name="bookmark-multiple" color={'#249EA0'} size={40}/>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <MaterialCommunityIcons name="map-marker" size={30} color={'#249EA0'}/>
            <Text style={{marginLeft: 5, fontSize:20, fontFamily: 'Montserrat'}}>{place.location}</Text>
          </View>
          <Text style={{marginTop: 20, fontFamily: 'LeagueGothic', fontSize: 30}}>Listing Information</Text>
          <Text style={{marginTop: 20, lineHeight: 22, fontFamily: 'Montserrat', fontSize: 15}}>{place.details}</Text>
        </View>
        <View style={styles.footer}>
          <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontFamily: 'Montserrat', color: '#fff'}}>2,000Php</Text>
            <Text style={{fontSize: 12, fontFamily: 'Montserrat', color:'#fff', marginLeft: 2, marginTop: 6}}> /PER MONTH</Text>
          </View>
          <TouchableOpacity onPress ={() => alert('Reserved Succesfully!')}>
            <View style={styles.bookmark}>
              <Text style={{color: '#249EA0', fontSize: 18, fontFamily: 'LeagueGothic'}}>RESERVE NOW!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  iconContainer:{
    height: 70,
    width: 70,
    position: 'absolute',
    top: -75,
    backgroundColor: '#fff',
    borderRadius: 40,
    right: 30,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer:{
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 0.3,
  },
  header:{
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails:{
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  imageName:{
    width: '70%',
    fontSize: 30,
    fontFamily: 'LeagueGothic',
    color: '#fff',
    marginBottom: 10,
  },
  footer:{
    flexDirection: 'row',
    backgroundColor: '#249EA0',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bookmark:{
    height: 50,
    width: 120,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});