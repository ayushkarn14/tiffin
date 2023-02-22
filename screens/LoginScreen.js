import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { collection, getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    useState,
    Alert,
    TouchableNativeFeedback,
    ImageBackground,
    ScrollView,
} from "react-native";

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
function LoginScreen(props) {
    const navigation = useNavigation();
    function onSignUp() {
        navigation.navigate("SignUp");
    }

    const [password, setPassword] = React.useState("");
    const [number, setNumber] = React.useState("");
    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <ImageBackground
                style={{
                    width: "100%",
                    height: 300,
                }}
                source={require("../assets/wave.jpg")}
            >
                <SafeAreaView>
                    <Image
                        source={require("../assets/favicon.png")}
                        style={{
                            alignSelf: "center",
                            width: 60,
                            height: 60,
                            marginTop: "30%",
                            marginBottom: 20,
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setNumber(text)}
                        value={number}
                        placeholder="Phone no."
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        placeholder="Password"
                        keyboardType="text"
                    />
                    <TouchableNativeFeedback
                        style={{ borderRadius: 10 }}
                        onPress={async () => {
                            const querySnapshot = await getDocs(
                                collection(db, "users")
                            );
                            querySnapshot.forEach((doc) => {
                                if(doc.data().phone==number){
                                    if(doc.data().password==password)
                                        alert("Logged In");
                                    else
                                        alert("Wrong number or password");
                                }
                            });
                        }}
                    >
                        <View style={styles.button}>
                            <Text style={{ fontSize: 20, color: "white" }}>
                                Login
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={onSignUp}>
                        <Text
                            style={{
                                alignSelf: "center",
                                color: "#737373",
                                fontSize: 15,
                            }}
                        >
                            Don't have an account? Sign up
                        </Text>
                    </TouchableNativeFeedback>
                </SafeAreaView>
            </ImageBackground>
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
export default LoginScreen;
