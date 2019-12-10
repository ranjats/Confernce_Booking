import React ,{Component} from 'react';
import { StyleSheet, Text,View} from 'react-native';
import {Icon, Button, Container, Header, Content,Left, Right } from 'native-base';




class MeetingRoom extends React.Component{
  render(){
    return (
     <Container>
        <Header>
         <Right>
           <Icon name="ios-menu" style = {styles.menu}
           onPress={
             ()=>this.props.navigation.navigate("DrawerOpen")} />
         </Right>
       </Header>
       <Content contentContainerStyle={{
         flex:1,
       }}>
          <ImageBackground
            style={{ flex: 1 }}
            //We are using online image to set background
            source={{
              uri:
                'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-map-background-blue-tech-education-theme-poster-background-image_153887.jpg',
            }}>
         <Text>  Meeting Room </Text>
         </ImageBackground>
       </Content>
     </Container>
    );
  }
}
 
export default MeetingRoom;

const styles = StyleSheet.create({
  menu: {
    alignSelf: 'stretch',
    alignItems: 'center',
    
    paddingLeft:0.5,
    marginTop:10
     
  }
});