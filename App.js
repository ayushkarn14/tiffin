// import LoginAndSignUpScreen from './screens/LoginAndSignUpScreen';
// import {AsyncStorage} from 'react-native';
// import HomeScreen from './screens/HomeScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import React from 'react';

// const Stack = createStackNavigator();

// export default function App() {
//   const [data,setData]=React.useState(null);
//   async function fun(){
//     const my_num = await AsyncStorage.getItem('number');
//     console.log(my_num);
//     if(my_num!=null)
//       setData(my_num);
//   }
//   fun();
//     // if(data==null)
//     //   return(<LoginAndSignUpScreen/>);
//     // else
//     //   return(<HomeScreen number={data}/>);
  
// }




import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LoginAndSignUpScreen from './screens/LoginAndSignUpScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#fa6412',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{
          title: 'Sign Up',
          headerStyle: {
            backgroundColor: '#fa6412',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#fa6412',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}