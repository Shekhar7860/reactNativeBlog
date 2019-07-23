import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import SignInStack from './SignInStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from './DrawerContent';
import HomeScreen from '../screens/HomeScreen';
import RankingScreen from '../screens/RankingScreen';

const DrawerNavigation = DrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    RankingScreen: { screen: RankingScreen },
  },
  {
    contentComponent: DrawerContent,
    drawerPosition: 'left',
    drawerWidth: 200,
  }
);

const MainStack = StackNavigator(
  {
    DrawerNavigation: DrawerNavigation,
  },
 { headerMode: 'none' }
);

let TransitionConfig = () => {
  return {
    screenInterpolator: ({ position, scene }) => {
      const opacity = position.interpolate({
        inputRange: [scene.index - 1, scene.index],
        outputRange: [0, 1],
      });
      return {
        opacity: opacity,
      };
    },
  };
};

const RootStackNavigator = StackNavigator(
  {
    SignInStack: { screen: MainStack },
    MainStack: { screen: MainStack },
  },
  {
    headerMode: 'none',
    transitionConfig: TransitionConfig,
  }
);

const styles = StyleSheet.create({
  toolbar:{
    backgroundColor:'#81c04d',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'    //Step 1
},
toolbarButton:{
    width: 50,            //Step 2
    color:'#fff',
    textAlign:'center'
},
toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex:1                //Step 3
}, 
  headerLeftIconStyle: {
    marginLeft: 15,
  },
  searchInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#999',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  searchInputIconStyle: {
    padding: 5,
  },
  searchInputStyle: {
    flex: 1,
    paddingRight: 10,
    textAlign: 'left',
  },
});

export default RootStackNavigator;
