import React, { useContext } from "react";
import {View, Text, Button, TouchableOpacity,Image, StyleSheet} from 'react-native';
import { AuthContext } from "../navigation/AuthProvider";
import FormButton from "../components/FormButton";

const EditProfileScreen = () => {
  const {user, logout} = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Edit Profile </Text>
      {/*<FormButton buttonTitle="Logout" onPress={() => logout()}/>*/}
    </View>
  );
};

export default EditProfileScreen;

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
