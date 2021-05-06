import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from "../screens/EditProfileScreen";
import UpdatePassword from "../screens/UpdatePassword";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        // tabBarIcon
      }}
    />
  </Stack.Navigator>
);
const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    {/*<Stack.Screen*/}
    {/*  name="EditProfile"*/}
    {/*  component={EditProfileScreen}*/}
    {/*  options={{*/}
    {/*    headerTitle: 'Edit Profile',*/}
    {/*    headerBackTitleVisible: false,*/}
    {/*    headerTitleAlign: 'center',*/}
    {/*    headerStyle: {*/}
    {/*      backgroundColor: '#fff',*/}
    {/*      shadowColor: '#fff',*/}
    {/*      elevation: 0,*/}
    {/*    },*/}
    {/*  }}*/}
    {/*/>*/}
  </Stack.Navigator>
);
const passStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Pass"
      component={UpdatePassword}
      options={{
        headerShown:false,
      }}
    />
  </Stack.Navigator>
);
const AppStack = () => {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen name='Home' component={HomeScreen}/>
    // </Stack.Navigator>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({route}) => ({
          tabBarLabel: 'Home',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" size={25} color="#666" />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" size={25} color="#666" />
          ),
        }}
      />
      <Tab.Screen
        name="Pass"
        component={passStack}
        options={{
          tabBarLabel: 'Update Pass',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="lock" size={25} color="#666" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
