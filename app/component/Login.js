import React  from 'react';
import { StyleSheet, 
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Image
} from 'react-native';

// import Signup from './Signup';
// import DrawerNavigator1 from '../Navigator/DrawerNavigator1';
import { createStackNavigator,
    createMaterialTopTabNavigator,
    createAppContainer } 
    from 'react-navigation';



 export default class Login extends React.Component{
    
  render(){
    return (
        <KeyboardAvoidingView  behavior="padding" >
            <ScrollView keyboardShouldPersistTaps='never'
                scrollEnabled={false}>
      <View style={styles.login}>
                 <Image style={styles.logo}
                 source={require('./Infinite-logo.jpg')} />
          <Text style={styles.header}>LogIn </Text>
          <TextInput style={styles.TextInput} placeholder="Enter Your Email" 
          returnKeyType="next" 
          onSubmitEditing = {() =>this.passwordInput.focus()}
          keyboardType= "email-address" 
          autoCapitalize = "none" 
          autoCorrect= {false} />
          <TextInput style={styles.TextInput} placeholder="Enter Your Password"
           returnKeyType="go"
          secureTextEntry={true} />
          
          <TouchableOpacity style = {styles.button} >
              <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity >
              <Text style={styles.txt}>
                  DoN'T HAVE ACCOUNT?</Text>
          </TouchableOpacity>
          <TouchableOpacity >
              <Text style={styles.txt}>FORGOT PASSWORD</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>  
       </KeyboardAvoidingView>
    );
  }
}
//  export default class MyPage extends React.Component{
//      render(){
//          return (
//             <AppStackNavigator />
//          );
//      }
//  }
//  const AppStackNavigator = createStackNavigator({
//      Login : Login,
//      Signup: Signup,
//      DrawerNavigator1: DrawerNavigator1
//  });

// const RootNavigator = createMaterialTopTabNavigator({
//     Login : Login,
//       Signup: Signup,
//       DrawerNavigator1: DrawerNavigator1
// });
// export default createAppContainer(RootNavigator);

const styles = StyleSheet.create({
  login: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  header: {
      fontSize: 24,
      color: '#fff',
      paddingBottom: 10,
      marginBottom: 20,
      borderBottomColor: '#199187',
      borderBottomWidth: 1,
      
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
      padding: 10,
      backgroundColor: '#59cbbd',
      marginTop: 20,
  },
  btnText: {
      color:'#fff',
      fontWeight: 'bold',
  },
  txt:{
    color:'#fff',
  },
  logo:{
    width:80,
    height: 80,
    
},
});
