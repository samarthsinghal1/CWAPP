import React, { useContext, useEffect, useState } from "react";
import {View, Text, Button, TouchableOpacity,Image, StyleSheet} from 'react-native';
import { AuthContext } from "../navigation/AuthProvider";
import FormButton from "../components/FormButton";
import firestore from '@react-native-firebase/firestore';
import FormInput from "../components/FormInput";
import FormCommentInput from "../components/FormCommentInput";

const HomeScreen = () => {
  const {user, addProject, logout, addTime} = useContext(AuthContext)
  const [userData, setUserData] = useState(null);
  const [projectName, setProjectName] = useState();
  const [updProjectName, setUpdProjectName] = useState();
  const [time, setTime] = useState();
  const [comment,setComment] = useState();

  const getUser = async() => {
    await firestore()
      .collection('users')
      .doc( user.uid)
      .get()
      .then((documentSnapshot) => {
        if( documentSnapshot.exists ) {
          // console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  useEffect(() => {
    getUser();
  }, []);

  const addNewProject = (projectName) =>{
    // projectadd(projectName);
    if (!projectName){
      alert("Project name cannot be empty")
    }
    else {
       firestore()
        .collection('project')
        .doc(projectName)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists){
            alert("Project already exists");
          }
          else{
            addProject(projectName);
          }
        })
         .catch(e=>{alert(e)});
    }

  }
  const updTime = (projectName, min, comment) =>{
    if(!projectName){
      alert("Project name empty");
    } else if (isNaN(min) || !min || min==0){
      alert("Invalid time");
    } else{
      firestore()
        .collection('project')
        .doc(projectName)
        .get()
        .then((documentSnapshot)=>{
          if (documentSnapshot.exists){
            // alert("Successful");
            addTime(projectName,comment,parseInt(min));
          }else{
            alert("Project doesn't exist");
          }
        })
        .catch(e=>{alert(e)})
    }
  }
  const temp = "";
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome { userData ? userData.fname : temp }! </Text>
      <FormInput
        labelValue={projectName}
        onChangeText={(userProject)=>setProjectName(userProject)}
        placeholderText="Project Name"
        iconType="barchart"
        // keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormButton
        buttonTitle="Add Project"
        // onPress={()=>alert("clicked!")}
        onPress = {() => addNewProject(projectName)}
      />
      <FormInput
        labelValue={updProjectName}
        onChangeText={(userProject)=>setUpdProjectName(userProject)}
        placeholderText="Project Name"
        iconType="barchart"
        // keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={time}
        onChangeText={(userProject)=>setTime(userProject)}
        placeholderText="Time worked on this project (in min)"
        iconType="clockcircleo"
        // keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormCommentInput
        labelValue={comment}
        onChangeText={(userProject)=>setComment(userProject)}
        placeholderText="Comment"
        iconType="paperclip"
        // keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormButton
        buttonTitle="Update your time"
        onPress={()=>updTime(updProjectName,time,comment)}
        // onPress = {() => addNewProject(projectName)}
      />
      {/*<FormButton*/}
      {/*  buttonTitle="Logout"*/}
      {/*  onPress ={()=>logout()}*/}
      {/*  />*/}
    </View>
  );
};

export default HomeScreen;

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
