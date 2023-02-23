/*

  REDUNDANT FILE

*/
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function LoginAndSignUpScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          title: 'Food App',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default LoginAndSignUpScreen;