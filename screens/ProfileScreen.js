import React, { useContext, useEffect, useState } from "react";
import {View, Text, Button, TouchableOpacity,Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { AuthContext } from "../navigation/AuthProvider";
import firestore from '@react-native-firebase/firestore';
import FormButton from "../components/FormButton";
import { windowHeight } from "../utils/Dimentions";

const ProfileScreen = () => {
  const {user, logout} = useContext(AuthContext)
  const [userData, setUserData] = useState(null);
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

  const initials = userData ? userData.fname.charAt(0) + userData.lname.charAt(0) : "";
  const blank = "";
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.profileImage}>
          <Text style={styles.userImgText}>{initials}</Text>
        </View>

        <View style={styles.userInfoItem}>
          <Text style={styles.userName}>{userData ? userData.fname + " " + userData.lname : blank}</Text>
        </View>

        <View style={styles.txtContainer}>
           <FormButton buttonTitle="Logout" onPress={() => logout()}/>
        </View>
      </ScrollView>

    </SafeAreaView>

  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  txtContainer:{
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  userImg: {
    height: 200,
    width: 200,
    borderRadius: 75,
  },
  userImgText:{
    textAlign:'center',
    fontSize: 70,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical:60,
  },
  userName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
    margin: 10,
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius:100,
    backgroundColor: '#512DA8',
    fontSize: 50,
    color: '#fff',
    textAlign: 'center',
    // lineHeight: 150,
    marginHorizontal: 20,
    marginVertical: 50,
}
});
// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     paddingTop: 50
//   },
//   logo: {
//     height: 150,
//     width: 250,
//     resizeMode: 'cover',
//   },
//   text: {
//     // fontFamily: 'Kufam-SemiBoldItalic',
//     fontSize: 28,
//     marginBottom: 10,
//     color: '#051d5f',
//   },
//   navButton: {
//     marginTop: 15,
//   },
//   forgotButton: {
//     marginVertical: 35,
//   },
//   navButtonText: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#2e64e5',
//     // fontFamily: 'Lato-Regular',
//   },
// });
