import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTabs from './screens/HomeTabs'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeTabs'>
        <Stack.Screen name='HomeTabs' component={HomeTabs} options={{title:'Renta Autos'}}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}