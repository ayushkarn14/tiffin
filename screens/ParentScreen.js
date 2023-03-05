import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import MenuScreen from "./MenuScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import OrderScreen from "./OrdersScreen";
import ProfileScreen from "./ProfileScreen";

// function ParentScreen() {
//     return (
//         <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//             <Text>Home!</Text>
//         </View>
//     );
// }

// function SettingsScreen() {
//     return (
//         <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//             <Text>Settings!</Text>
//         </View>
//     );
// }

const Tab = createBottomTabNavigator();

function ParentScreen() {
    return (
        <NavigationContainer independent="true">
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Orders") {
                            iconName = focused ? "list" : "list-outline";
                        } else if (route.name === "Menu") {
                            iconName = focused
                                ? "fast-food"
                                : "fast-food-outline";
                        } else if (route.name === "Profile") {
                            iconName = focused ? "person" : "person-outline";
                        }

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "Home",
                        headerStyle: {
                            backgroundColor: "#fa6412",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Tab.Screen
                    name="Menu"
                    component={MenuScreen}
                    options={{
                        title: "Menu",
                        headerStyle: {
                            backgroundColor: "#fa6412",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Tab.Screen
                    name="Orders"
                    component={OrderScreen}
                    options={{
                        title: "Orders",
                        headerStyle: {
                            backgroundColor: "#fa6412",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        title: "Profile",
                        headerStyle: {
                            backgroundColor: "#fa6412",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default ParentScreen;
