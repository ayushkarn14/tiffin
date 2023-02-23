import React, { cloneElement } from "react";
import { View, Text, Button } from "react-native";
import {AsyncStorage} from 'react-native';
import { Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDpE2lvJ0Mo3l-YAUo2qqA8Huq2JZz4UMc",
  authDomain: "tiffin-bdce5.firebaseapp.com",
  projectId: "tiffin-bdce5",
  storageBucket: "tiffin-bdce5.appspot.com",
  messagingSenderId: "343099813980",
  appId: "1:343099813980:web:a073b34c740665c2fef699",
  measurementId: "G-S8M05G38S8"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function HomeScreen(props){
    const [number, setNumber] = React.useState("");
    async function getNumber(){
        const value = await AsyncStorage.getItem('number');
        setNumber(value);
    }
    getNumber();
    const navigation = useNavigation();

    const [address,setAddress]=React.useState("");
    const [name,setName]=React.useState("");
    async function getInfo(){
        let numFound=false;
        const querySnapshot = await getDocs(
            collection(db, "users")
        );
        querySnapshot.forEach((doc) => {
            if(doc.data().phone==number){
                numFound=true;
                setName(doc.data().name);
                setAddress(doc.data().address);
            }
        });
    }
    getInfo();
    
    return (
        <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
        <Text>Name: {name}</Text>
        <Text>Address: {address}</Text>
        <Text>Number: {number}</Text>
        <Button title="Logout" onPress={async()=>{
          //loging out
          await AsyncStorage.removeItem('number');
          console.log("Removed");
          navigation.replace("Login");
        }}/>
        </View>
    );
};

export default HomeScreen;
