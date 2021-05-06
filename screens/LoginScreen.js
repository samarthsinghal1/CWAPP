import React, { useContext, useState } from "react";
import {View, Text, Button, TouchableOpacity,Image, StyleSheet} from 'react-native';
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from "../navigation/AuthProvider";


const LoginScreen = ({ navigation }) => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const {login} = useContext(AuthContext);
  const goToSign = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/phfi_logo.png')}
             style = {styles.logo}/>
      {/*<Text style={styles.text}> Attendance App</Text>*/}
      <FormInput
        labelValue={email}
        onChangeText={(userEmail)=>setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword)=>setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign In"
        onPress={()=>login(email,password)}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={() => {goToSign()}}>
        <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 250,
    resizeMode: 'cover',
  },
  text: {
    // fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    // fontFamily: 'Lato-Regular',
  },
});

