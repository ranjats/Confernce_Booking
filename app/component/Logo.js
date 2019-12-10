import React from 'react';
import { StyleSheet, Text,
    View,Image, 
    KeyboardAvoidingView,
    ScrollView } from 'react-native';

// import Login from './Login';
import AdminSlide from './AdminSlide';
function Separator() {
    return <View style={styles.separator} />;
  }
export default class Logo extends React.Component{
  render(){
    return (
        <KeyboardAvoidingView  behavior="padding" style={styles.container}>
           
             {/* <View style={styles.logoContainer}>
              
             </View>
             <Separator />
             <View style={styles.formContainer}>
                 <Login />
            </View>      */}
            <View >
                <AdminSlide />
            </View>
           
       </KeyboardAvoidingView>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2E86C1',
    paddingLeft: 60,
    paddingRight: 60,
  },
//   logoContainer:{
//       alignItems: 'center',
//       flexGrow: 1,
//       justifyContent: 'center',
      
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: '#2E86C1',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
  formContainer:{
    marginBottom: 50,
  },
 
  
});
