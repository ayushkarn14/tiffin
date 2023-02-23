import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { auth } from "../firebaseConfig";
import firestore from "@react-native-firebase/firestore";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    useState,
    ScrollView,
    Alert,
    TouchableNativeFeedback,
    ImageBackground,
    Easing,
} from "react-native";
const firebaseConfig = {
    apiKey: "AIzaSyDpE2lvJ0Mo3l-YAUo2qqA8Huq2JZz4UMc",
    authDomain: "tiffin-bdce5.firebaseapp.com",
    projectId: "tiffin-bdce5",
    storageBucket: "tiffin-bdce5.appspot.com",
    messagingSenderId: "343099813980",
    appId: "1:343099813980:web:a073b34c740665c2fef699",
    measurementId: "G-S8M05G38S8",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
function SignUpScreen() {

    const [name, setName] = React.useState("");
    // const [mail, setEmail] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [number, setNumber] = React.useState("");
    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <ImageBackground
                style={{
                    width: "100%",
                    height: 150,
                }}
                source={require("../assets/wave.jpg")}
            ></ImageBackground>
            <ScrollView>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder="Name"
                    keyboardType="text"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setNumber(text)}
                    value={number}
                    placeholder="Phone no."
                    keyboardType="numeric"
                />
                {/* <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={mail}
                    placeholder="Email"
                    keyboardType="text"
                ></TextInput> */}
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder="Password"
                    keyboardType="text"
                />
                <TextInput
                    multiline={true}
                    style={styles.address}
                    onChangeText={(text) => setAddress(text)}
                    value={address}
                    placeholder="Address"
                    keyboardType="text"
                />
                <TouchableNativeFeedback
                    onPress={async () => {
                        // createUserWithEmailAndPassword(auth, mail, password)
                        //     .then((userCredential) => {
                        //         const user = userCredential.user;
                        //         Alert.alert("Signed Up");

                        //         // ...
                        //     })
                        //     .catch((error) => {
                        //         const errorCode = error.code;
                        //         const errorMessage = error.message;
                        //         // Alert.alert(errorMessage);
                        //         console.log(errorMessage);
                        //         // ..
                        //     });
                        const querySnapshot = await getDocs(
                            collection(db, "users")
                        );
                        let found = false;
                        querySnapshot.forEach((documentSnapshot) => {
                            if (documentSnapshot.data().phone == number) {
                                found = true;
                            }
                            // console.log(documentSnapshot.data().phone);
                        });
                        if (!found){
                            await setDoc(doc(db, "users",number), {
                                address:address,
                                bhu:"no",
                                name:name,
                                password:password,
                                phone:number
                              });
                              alert("Signed Up");
                        }
                        else
                        alert("Number already exists");
                }}
                >
                    <View style={styles.button}>
                        <Text style={{ fontSize: 20, color: "white" }}>
                            SignUp
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 15,
        marginLeft: 60,
        marginRight: 60,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        padding: 10,
        borderColor: "grey",
        backgroundColor: "white",
    },
    address: {
        height: 100,
        margin: 15,
        marginLeft: 60,
        marginRight: 60,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        padding: 10,
        borderColor: "grey",
        backgroundColor: "white",
    },
    button: {
        backgroundColor: "#ff6600",
        borderRadius: 10,
        height: 50,
        margin: 15,
        marginLeft: 60,
        marginRight: 60,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default SignUpScreen;
