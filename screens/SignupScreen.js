import React, { useContext, useState } from "react";
import {View, Text, Button, TouchableOpacity,Image, StyleSheet} from 'react-native';
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { AuthContext } from "../navigation/AuthProvider";

const SignupScreen = () => {
  const [fname,setfName] = useState();
  const [lname,setlName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  // const [confirmPassword,setConfirmPassword] = useState();



  const {register} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Create an account</Text>
      <FormInput
        labelValue={fname}
        onChangeText={(userName)=>setfName(userName)}
        placeholderText="First Name"
        iconType="user"
        // keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={lname}
        onChangeText={(userName)=>setlName(userName)}
        placeholderText="Last Name"
        iconType="user"
        // keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={email}
        onChangeText={(userEmail)=>setEmail(userEmail)}
        placeholderText="Email"
        iconType="mail"
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
        buttonTitle="Sign Up"
        onPress={()=>register(fname,lname,email,password)}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
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

  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    // fontFamily: 'Lato-Regular',
  },
});
