import React, { useContext, useState } from "react";
import {View, Text, Button, TouchableOpacity,Image, StyleSheet} from 'react-native';
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from "../navigation/AuthProvider";

const UpdatePassword = ({ navigation }) => {
  // const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const { updatePass } = useContext(AuthContext);
  const [confirmPassWord, setConfirmPassword] = useState();
  const setPass = (password,confirmPassWord) =>{
    if (password===confirmPassWord){
      updatePass(password);
      alert("Password reset successful!")
    }else{
      alert("Password don't match!");
      console.log("Passwords don't match!");
    }
  }
  return (
    <View style={styles.container}>
      <FormInput
        labelValue={password}
        onChangeText={(userPassword)=>setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormInput
        labelValue={confirmPassWord}
        onChangeText={(userConfirmPassword)=>setConfirmPassword(userConfirmPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Reset Password"
        onPress={()=>setPass(password,confirmPassWord)}
      />
    </View>
  )
}

export default UpdatePassword;

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
