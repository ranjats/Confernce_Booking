import React ,{Component } from 'react';
import { View, Text,StyleSheet, Image} from 'react-native';
import { DrawerNavigator,  DrawerItems, createStackNavigator } from 'react-navigation';
import {Container, Header, Body, Content } from 'native-base';


import HomeAdmin from '../Screens/HomeAdmin';
// import MeetingRoom from '../Screens/MeetingRoom';
import TrainingRoom from '../Screens/TrainingRoom';
import About from '../Screens/About';

class DrawerNavigatorAdmin extends React.Component{
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
        screen: HomeAdmin
        },
    //     MeetingRoom: {
    //     screen: MeetingRoom
    // },
    TrainingRoom: {
        screen: TrainingRoom
    },
    About: {
        screen: About
    },
   
},
    {
        initialRouteName:'Home',
        contentComponent:CustomDrawerContentComponet,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    
    });
    
export default DrawerNavigatorAdmi;

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
