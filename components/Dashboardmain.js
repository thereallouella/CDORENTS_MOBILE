import React from 'react';
import { useFonts } from 'expo-font';
import { ListCategories, TouchableOpacity, TextInput, Image, ImageBackground, StyleSheet, StatusBar, Text, View, ScrollView, Button, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Owner(){
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
    return(
        <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
          <StatusBar translucent={false} backgroundColor={'#249EA0'}/>
            <View style={styles.header}>
              <MaterialCommunityIcons name= "bookmark-multiple" size={28} color={'#fff'} onPress={() => navigation.navigate('Registration')}/>
              <MaterialCommunityIcons name= "account-circle" size={35} color={'#fff'}/>
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
  }
});