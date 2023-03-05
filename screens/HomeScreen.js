import React, { cloneElement } from "react";
import { View, Text, Button } from "react-native";
import { AsyncStorage } from "react-native";
import {
    Alert,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { ImageSlider } from "react-native-image-slider-banner";

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

function HomeScreen(props) {
    const [number, setNumber] = React.useState("");
    async function getNumber() {
        const value = await AsyncStorage.getItem("number");
        setNumber(value);
    }
    getNumber();
    const navigation = useNavigation();

    const [address, setAddress] = React.useState("");
    const [name, setName] = React.useState("");
    const [isBhu, setBhu] = React.useState("");
    async function getInfo() {
        let numFound = false;
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            if (doc.data().phone == number) {
                numFound = true;
                setName(doc.data().name);
                setAddress(doc.data().address);
                setBhu(doc.data().bhu);
            }
        });
    }
    getInfo();

    const subjects = [
        { id: 1, name: "Card 1", image: "../assets/food.jpg" },
        { id: 2, name: "Card 2", image: "../assets/food.jpg" },
        { id: 3, name: "Card 3", image: "../assets/food.jpg" },
        { id: 4, name: "Card 4", image: "../assets/food.jpg" },
        { id: 5, name: "Card 5", image: "../assets/food.jpg" },
        { id: 6, name: "Card 6", image: "../assets/food.jpg" },
    ];

    const cardGap = 12;

    const cardWidth = (Dimensions.get("window").width - cardGap * 3) / 2;

    return (
        // <View
        //     style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        // >
        // <Text>Name: {name}</Text>
        // <Text>Address: {address}</Text>
        // <Text>Number: {number}</Text>
        // <Text>BHU Student: {isBhu}</Text>
        // <Button title="Logout" onPress={async()=>{
        //   //loging out
        //   await AsyncStorage.removeItem('number');
        //   console.log("Removed");
        //   navigation.replace("Login");
        // }}/>
        // </View>
        <ScrollView>
            <Image
                style={{
                    width: "100%",
                    height: undefined,
                    aspectRatio: 135 / 76,
                }}
                source={require("../assets/banner.jpg")}
            ></Image>
            <Text style={{ fontSize: 20, marginLeft: 12, marginTop: 12 }}>
                Special Meals
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {subjects.map((subject, i) => {
                    return (
                        <View
                            key={subject.id}
                            style={{
                                marginTop: cardGap,
                                marginLeft: i % 2 !== 0 ? cardGap : 0,
                                width: cardWidth,
                                height: 180,
                                backgroundColor: "white",
                                borderRadius: 10,
                                shadowOpacity: 0.2,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <TouchableOpacity>
                                <Image
                                    style={{
                                        width: cardWidth - cardWidth / 3,
                                        height: cardWidth - cardWidth / 3,
                                    }}
                                    source={require("../assets/food.jpg")}
                                />
                                <Text style={{ alignSelf: "center" }}>
                                    {subject.name}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
            <Text style={{ fontSize: 20, marginLeft: 12, marginTop: 12 }}>
                Offers
            </Text>
            <ImageSlider
                data={[
                    {
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU",
                    },
                    {
                        img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
                    },
                    {
                        img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
                    },
                ]}
                autoPlay={false}
                // onItemChanged={(item) => console.log("item", item)}
                closeIconColor="#fff"
            />
        </ScrollView>
    );
}
const style = StyleSheet.create({
    card: {
        padding: 5,
        margin: 5,
        flex: 1,
        backgroundColor: "#EAEAEA",
    },
});
export default HomeScreen;
