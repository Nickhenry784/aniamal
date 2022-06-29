import { 
  View, 
  StyleSheet, 
  TouchableOpacity,
  Text, Dimensions,
  ImageBackground, 
  Image,
  FlatList, 
  Alert  } from "react-native";
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {decrement} from '../redux/pointSlice';
import {useDispatch, useSelector} from 'react-redux';
import { images } from "../assets";
import { animalData } from "../assets/animal";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const numCol = 2;

const HomeScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const points = useSelector(state => state.points);

  const onClickTurnButton = () => {
    navigation.navigate("BUY");
  }

  const onClickStartButton = (item) => {
    if(points === 0){
      Alert.alert("Please buy more turn!");
      return false;
    }
    dispatch(decrement());
    navigation.navigate("Play", {
      animal: item
    });
  }


  return (
    <ImageBackground style={appStyle.homeView} source={images.background}>
      <View style={appStyle.appBar}>
        <TouchableOpacity onPress={onClickTurnButton}>
          <View style={appStyle.turnView}>
            <Image source={images.buybutton} style={appStyle.buyImage} />
            <Text style={appStyle.turnText}>{points.value}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={appStyle.labelText1}>Animal Information</Text>
      <View style={appStyle.centerView}>
        <FlatList 
          data={animalData}
          scrollEnabled={false}
          numColumns={numCol}
          renderItem={({item}) => (
            <TouchableOpacity key={item.id} onPress={() => onClickStartButton(item)}>
              <View style={appStyle.itemView}>
                <Image source={item.image} style={appStyle.centerImage} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
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
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    resizeMode: 'contain',
  },
  turnText: {
    fontSize: windowWidth > 640 ? 30 : 25,
    fontWeight: 'bold',
    color: 'black',
  },
  labelText1: {
    marginTop: 30,
    fontSize: windowWidth > 640 ? 40 : 30,
    color: 'black',
    fontWeight: 'bold',
  },
  buyImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'contain',
  },
  itemView: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    marginVertical: 30,
    marginHorizontal: 10,
    borderRadius: 1,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
  },
  centerView: {
    flex: 0.8,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;