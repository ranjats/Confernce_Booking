import React from 'react';
import { StyleSheet, 
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Signup extends React.Component{
  
  render(){
    return (
      <View style={styles.signup}>
          <Text style={styles.header}>Sign Up </Text>

          <TextInput style={styles.TextInput} placeholder="Enter Your Name" />
          <TextInput style={styles.TextInput} placeholder="Enter Your Employee Id" />
          <TextInput style={styles.TextInput} placeholder="Enter Your Email" />
          <TextInput style={styles.TextInput} placeholder="Enter Your Password"
          secureTextEntry={true} />
          <TextInput style={styles.TextInput} placeholder="Enter Your Phone" />
          <TextInput style={styles.TextInput} placeholder="Enter Your Floor" />

          <TouchableOpacity style = {styles.button}  >
              <Text style={styles.btnText}>SignUp</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  signup: {
    alignSelf: 'stretch',
  },
  header: {
      fontSize: 24,
      color: '#fff',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#199187',
      borderBottomWidth: 1,
      textAlign:'center'
  },
  TextInput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#f8f8f8',
  },
  
  button:{
      alignSelf:'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop: 30,
  },
  btnText: {
      color:'#fff',
      fontWeight: 'bold',
  }
});
