import React from 'react';
import Login from './app/component/Login';
import Signup from './app/component/Signup';
import { StyleSheet, Text,View,ImageBackground} from 'react-native';
import {Asset} from 'expo-asset';
import { AppLoading } from 'expo';

function cacheImages(images){
  return images.map(image => {
    if(typeof image === 'string'){
      return Image.prefetch(image);
    }else{
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      isReady:false
    }
  };
  
  async _loadAssestsAsync(){
    const imageAssets= cacheImages([require('./download1.jpg')]);
    await Promise.all([...imageAssets]);
  }
  render(){
    if(!this.state.isReady)
    {
      return(
        <AppLoading
        startAsync={this._loadAssestsAsync}
        onFinish={()=> this.setState({ isReady: true})}
        onError={console.warn}
        />
      );
    }
    return <Login />
  }
}
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'#fff'
     
   },
  
 });