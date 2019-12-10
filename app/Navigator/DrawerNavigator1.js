import React ,{Component } from 'react';
import { View, Text,StyleSheet, Image} from 'react-native';
import { DrawerNavigator,  DrawerItems, createStackNavigator } from 'react-navigation';
import {Container, Header, Body, Content, Right } from 'native-base';


import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/Profile';
import BookingHistory from '../Screens/BookingHistory';
import SubmitScreen from '../Screens/SubmitScreen';
import About from '../Screens/About';

class DrawerNavigator1 extends React.Component{
    render(){
        return(
           <MyApp />
        )
    }
}

const CustomDrawerContentComponet = (props)=>(
    <Container style={styles.cont}>
        <Header style={{height: 100}}>
            <Body>
                 <Image 
                style={styles.DrawImage}
                source={require('./Infinite-logo.jpg')} />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
)
const MyApp = DrawerNavigator({
    
    Home: { 
        screen: HomeScreen
        },
    Profile: {
        screen: Profile
    },
    BookingHistory: {
        screen: BookingHistory
    },
    About: {
        screen: About
    },
    Submit: {
        screen: SubmitScreen
    }
},
    {
        initialRouteName:'Home',
        contentComponent:CustomDrawerContentComponet,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    
    });
    
export default DrawerNavigator1;

 styles = StyleSheet.create({
    container:{
        flex:1,
    },
    DrawImage: {
        width:100,
        height: 100,
        borderRadius:75
    },
    cont:{
        marginTop: 20
    }
})
