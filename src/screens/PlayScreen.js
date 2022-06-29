import { 
  View, 
  StyleSheet, 
  Text, Dimensions,
  ImageBackground, 
  Image,
  ScrollView, 
  Alert  } from "react-native";
import React, {useEffect, useState} from 'react';
import { images } from "../assets";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const HomeScreen = ({navigation, route}) => {
  const {animal} = route.params;



  return (
    <ImageBackground style={appStyle.homeView} source={images.background}>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20,alignItems: 'center'}}>
        <View style={appStyle.itemView}>
          <Image source={animal.image} style={appStyle.centerImage} />
        </View>
        <Text style={appStyle.labelText1}>Animal Information</Text>
        <Text style={appStyle.turnText}>{animal.info}</Text>
      </ScrollView>
      
    </ImageBackground>
  );
};


export const appStyle = StyleSheet.create({
  homeView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    resizeMode: 'cover',
  },
  logoImage: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.7,
    resizeMode: 'contain',
  },
  appBar: {
    flex: 0.1,
    paddingRight: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  turnView: {
    flexDirection: 'row',
    width: windowWidth * 0.15,
    marginRight: 10,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    resizeMode: 'contain',
  },
  turnText: {
    fontSize: windowWidth > 640 ? 30 : 25,
    fontWeight: 'bold',
    color: 'black',
  },
  labelText1: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: windowWidth > 640 ? 40 : 30,
    color: 'black',
    fontWeight: 'bold',
  },
  itemView: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
    marginVertical: 10,
    borderRadius: 2,
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
  },
  centerView: {
    flex: 0.8,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;