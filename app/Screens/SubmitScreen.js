import React ,{Component} from 'react';
import { StyleSheet, Text,View,ImageBackground} from 'react-native';
import {Icon, Button, Container, Header, Content,Left, Right } from 'native-base';



function Separator() {
  return <View style={styles.separator} />;
} 
class SubmitScreen extends React.Component{
  render(){
    return (
     <Container>
        <Header>
         <Right>
           <Icon name="ios-menu"
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
        <View style={styles.container}>
         <Text>  Submit Details </Text>
         </View>
         </ImageBackground>
       </Content>
     </Container>
    );
  }
}
 
export default SubmitScreen;

const styles = StyleSheet.create({
  
  imgBackground: {
    width: '100%',
    height: 50,
    flex: 1 
},
separator: {
  marginVertical: 8,
  borderBottomColor: '#2E86C1',
 
},
});
