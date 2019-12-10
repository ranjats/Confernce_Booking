import React from 'react';
import { StyleSheet, Text,View,ImageBackground} from 'react-native';
 import Login from './app/component/Login';
 import Signup from './app/component/Signup';
 import DrawerNavigator1 from './app/Navigator/DrawerNavigator1';


export default class App extends React.Component{
  render(){
    return (
     
      <ImageBackground
        style={{ flex: 1 }}
        //We are using online image to set background
        source={{
          uri:
            'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-map-background-blue-tech-education-theme-poster-background-image_153887.jpg',
        }}>
       <View style={styles.container}>     
         <DrawerNavigator1 />
       </View>
      </ImageBackground>
    );
  }
}
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     
   },
  
 });
