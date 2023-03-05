import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
// import HomeScreen from "./screens/HomeScreen";
import ParentScreen from "./screens/ParentScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        title: "Login",
                        headerStyle: {
                            backgroundColor: "#fa6412",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{
                        title: "Sign Up",
                        headerStyle: {
                            backgroundColor: "#fa6412",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={ParentScreen}
                    options={{
                        title: "Home",
                        headerStyle: {
                            backgroundColor: "#fa6412",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
