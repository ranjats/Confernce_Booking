import React ,{Component} from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  ImageBackground, 
  Button,
  Picker} from 'react-native';
import {Icon, Container, Header, Content,Right } from 'native-base';


function Separator() {
  return <View style={styles.separator} />;
} 
class About extends React.Component{
  constructor(){
      super();
      this.state={
        PickerValue:'',
        text: 'Description',
      }
  };
  clickMe=()=>{
    var data = this.state.PickerValue;
    if(data=="")
    {
      alert("Please select Florr");
    }else{
      alert(data);
    }
   
  }
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
        
         <View style={styles.fixToText}>  
         <Text >FLOOR </Text> 
        <Picker
         style={{width:'50%'}}
         selectedValue={this.state.PickerValue}
         onValueChange={(itemValue,itemIndex) => this.setState({PickerValue :itemValue})}>
           
           <Picker.Item label="Select a Capacity" value=""/>
            <Picker.Item label="0-5" value="5" />
            <Picker.Item label="6-10" value="10" />
            <Picker.Item label="11-20" value="20" />
         </Picker>
        
        <Text style={styles.Desc}>FLOOR </Text>
         <Picker
         style={{width:'50%'}}
         selectedValue={this.state.PickerValue}
         onValueChange={(itemValue,itemIndex) => this.setState({PickerValue :itemValue})}>
           <Picker.Item label="Select a Floor" value=""/>
            <Picker.Item label="Ground Floor" value="GF" />
            <Picker.Item label="First Floor" value="F1" />
            <Picker.Item label="Second Floor" value="F2" />
         </Picker>
        </View>  
        <Separator />  
        <View style={styles.fixToText}>  
        <Text style={styles.Desc}>Description </Text>
        <TextInput
        style={{height: '100%', width: '50%', borderColor: 'gray', borderWidth: 1, paddingRight: '20%'}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />   
     </View>  
      </View>
      <Separator />
      <Button style = {styles.button} title="Submit" onPress={this.clickMe}/> 
      </ImageBackground>
       </Content>
     </Container>
    );
  }
}
 
export default About;
const styles = StyleSheet.create({
  container: {
    flex:1,
    height:50,
    width:'90%',
    paddingBottom:'50%',
   
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
fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
button:{
  alignSelf:'stretch',
  alignItems: 'center',
  padding: 10,
  backgroundColor: '#59cbbd',
  marginTop: 20,
},
Desc: {
  alignItems: 'center',
  paddingLeft: 20,
}
});

