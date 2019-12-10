import React ,{Component} from 'react';
import { StyleSheet, Text,View,TextInput , TouchableOpacity, KeyboardAvoidingView, ScrollView,
  ImageBackground} from 'react-native';
import {Icon, Button, Container, Header, Content,Left, Right } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';  




function Separator() {
  return <View style={styles.separator} />;
} 
class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render(){
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
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
        <CalendarPicker
          onDateChange={this.onDateChange}
        />
   
        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>
         <Text>  Home Screen </Text>
         </ImageBackground>
       </Content>
     </Container>
    );
  }
}
 
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
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