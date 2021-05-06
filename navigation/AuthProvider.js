import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
            alert(e);
          }
        },
        register: async (fname,lname,email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                firestore().collection('users').doc(auth().currentUser.uid)
                  .set({
                    fname: fname,
                    lname: lname,
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg: null,
                  })
                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch(error => {
                    console.log('Something went wrong with added user to firestore: ', error);
                  })
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
                alert(error);
              });
          } catch (e) {
            console.log(e);
            alert(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
        updatePass: async(password) => {
          try {
            await auth().currentUser.updatePassword(password);
          } catch (e) {
            console.log(e);
            alert(e);
          }
        },
        addProject : async(projectName)=>{
          try{
            firestore().collection('project')
              .doc(projectName)
              .set({
                name: projectName,
                createdAt: firestore.Timestamp.fromDate(new Date()),
              })
              .then(() => {alert("Project added!")})
              .catch(error=>{
                console.log(error);
                alert(error);
              });
          }catch(e){
            console.log(e);
            alert(e);
          }
        },
        addTime : async(projectName, comment, min) =>{
          try{
            firestore().collection('times')
              .add({
                createdAt: firestore.Timestamp.fromDate(new Date()),
                project: projectName,
                comment: comment,
                uid: auth().currentUser.uid,
                mins: min
              })
              .then(()=>{alert("Updated Successfully")})
              .catch(error => {
                console.log(error);
                alert(error);
              })
          }catch (e) {
            console.log(e);
            alert(e);
          }
        },

      }}>
      {children}
    </AuthContext.Provider>
  );
};
