import React ,{Component} from 'react';
import { StyleSheet, Text,View} from 'react-native';
import {Icon, Button, Container, Header, Content,Left, Right } from 'native-base';




class TrainingRoom extends React.Component{
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
         alignItems:'center',
         justifyContent:'center',
         backgroundColor: '#199187'
       }}>
         <Text>  Training Room  </Text>
       </Content>
     </Container>
    );
  }
}
 
export default TrainingRoom;

const styles = StyleSheet.create({
  menu: {
    alignSelf: 'stretch',
    alignItems: 'center',
    
    paddingLeft:0.5,
    marginTop:10
     
  }
});