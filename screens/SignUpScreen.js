import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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
    Switch,
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
    const [buttonColor, setColor] = React.useState("#ff6600");
    const [isEnabled, setIsEnabled] = React.useState(false);
    function bhuswitch() {
        setIsEnabled(!isEnabled);
    }
    function pressed() {
        setColor("#A4A4A4");
        setTimeout(() => {
            setColor("#ff6600");
        }, 10000);
    }

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
                <View
                    style={{
                        justifyContent: "center",
                        flexDirection: "row",
                        margin: 15,
                        marginLeft: 60,
                        marginRight: 60,
                    }}
                >
                    <Text style={styles.text}>BHU Student ?</Text>
                    <Switch
                        style={{ alignSelf: "center", flex: 2 }}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#fa6412" : "#000000"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={bhuswitch}
                        value={isEnabled}
                    />
                </View>
                <TouchableNativeFeedback
                    onPress={async () => {
                        pressed();
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
                                bhu: isEnabled?"Yes":"No",
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
                    <View style={{
                         backgroundColor: buttonColor,
                         borderRadius: 10,
                         height: 50,
                         margin: 15,
                         marginLeft: 60,
                         marginRight: 60,
                         justifyContent: "center",
                         alignItems: "center",
                    }}>
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
    text: {
        flex: 5,
        alignSelf: "center",
        fontSize: 20,
        marginLeft: 9,
        color: "gray",
    },
});
export default SignUpScreen;
