import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTabs from './screens/HomeTabs'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import RegisterCar from './screens/Car'
import RegisterRent from './screens/Rent'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeTabs'>
        <Stack.Screen name='HomeTabs' component={HomeTabs} options={{title:'Renta Autos'}}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Car' component={RegisterCar}/>
        <Stack.Screen name='Rent' component={RegisterRent}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}