import React from 'react';
import { useFonts } from 'expo-font';
import {FlatList, ListCategories, TouchableOpacity, TextInput, Image, ImageBackground, StyleSheet, StatusBar, Text, View, ScrollView, Button, SafeAreaView, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import places from '../const/places.js';
const {width} = Dimensions.get('screen');

export default function Owner({ navigation }){
  const categoryIcons =[
    <MaterialCommunityIcons name="bed" size={25} color={'#249EA0'}/>,
    <MaterialCommunityIcons name="sofa" size={25} color={'#249EA0'}/>,
    <MaterialCommunityIcons name="home-search" size={25} color={'#249EA0'}/>,
  ];
  const ListCategories =() => {
    return (
      <View style={styles.categoryContainer}>
        {categoryIcons.map((icon, index)=> (
          <View key={index} style={styles.iconContainer}>{icon}</View>
        ))}
      </View>
    );
  };

  const Card = ({place}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Details',place)}>
        <ImageBackground style={styles.cardImage} source={place.image}>
          <Text style={styles.caption}>{place.name}</Text>
          <View style={styles.locationPhoto}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="map-marker" size={20} color={'#fff'} />
              <Text style={{marginLeft: 5, color: '#fff'}}>{place.location}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const Recommendations = ({place}) => {
    return <ImageBackground 
      style={styles.rmCardImage}
      source={place.image}>
        <Text style={styles.recommendCard}>{place.name}</Text>
        <View style={styles.recommendCard1}>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name= "map-marker" size={22} color={'#fff'}/>
              <Text style={{flexDirection: 'row', color: '#fff'}}>{place.location}</Text>
            </View>
          </View>
          <Text style={{color: '#fff', fontSize: 13, fontFamily: 'Montserrat'}}>{place.details}</Text>
        </View>
      </ImageBackground>
  }
    return(
        <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
          <StatusBar translucent={false} backgroundColor={'#249EA0'}/>
            <View style={styles.header}>
              <MaterialCommunityIcons name= "bookmark-multiple" size={28} color={'#fff'} onPress={() => navigation.navigate('Reservation')}/>
              <MaterialCommunityIcons name= "account-circle" size={35} color={'#fff'} onPress={() => navigation.navigate('Profile')}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.scroll}>
                <View>
                <Text style={styles.headerTitle}>New Listings!</Text>
                <Text style={styles.headerTitle1}>CDO's Finest Accomodations</Text>
                <View style={styles.searchInput}>
                  <MaterialCommunityIcons name="map-marker" size={28}/>
                  <TextInput placeholder='Search Location' style={styles.searchBar}/>
                </View>
                </View>
              </View>
              <ListCategories />
              <Text style={styles.sectionTitle}>Recent Listings</Text>
              <View>
                <FlatList
                  contentContainerStyle={{paddingLeft:20}}
                  horizontal
                  showsHorizontalScrollIndicator={false} 
                  data={places}
                  renderItem={({item}) => <Card place={item} />}
                />
                <Text style={styles.sectionTitle}>Recommendations</Text>
                <FlatList
                  snapToInterval={width - 20}
                  contentContainerStyle={{paddingLeft:20, paddingBottom: 20}}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={places}
                  renderItem={({item}) => <Recommendations place={item}/>} 
                />
              </View>
            </ScrollView>
        </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  header:{
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#249EA0',
  },
  scroll:{
    backgroundColor: '#249EA0',
     height: 120,
     paddingHorizontal: 20,
  },
  headerTitle:{
    color: '#fff',
    fontFamily: 'LeagueGothic',
    fontSize: 40,
    letterSpacing: 1,
  },
  headerTitle1:{
    color: '#fff',
    fontFamily: 'LeagueGothic',
    fontSize: 25,
    letterSpacing: 1,
  },
  searchInput:{
    height:60,
    width:'100%',
    backgroundColor: '#EEF2E6',
    borderRadius:10,
    position: 'absolute',
    top: 110,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  searchBar:{
    color: '#eef2e6',
  },
  categoryContainer:{
    marginTop:60,
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  iconContainer:{
    marginTop: 10,
    height: 60,
    width: 60,
    backgroundColor: '#eef2e6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10, 
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontSize: 20,
    fontFamily: 'Montserrat',
  },
  cardImage:{
    height: 200,
    width: width/2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  caption:{
    color: '#fff',
    fontSize: 20,
    fontFamily:'LeagueGothic',
    marginTop: 10,
  },
  locationPhoto:{
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  rmCardImage:{
    width: width-40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  recommendCard:{
    color: '#fff',
    fontSize: 22,
    fontFamily: 'LeagueGothic',
    marginTop: 10,
  },
  recommendCard1:{
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },  
});