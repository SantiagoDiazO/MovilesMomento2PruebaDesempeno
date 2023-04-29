import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import User from '../screens/User.jsx'
import Car from '../screens/Car.jsx'
import Rent from '../screens/Rent.jsx'

const Tab = createBottomTabNavigator()

export default function HomeTabs({navigation}) {
    return (
        <Tab.Navigator initialRouteName='User' screenOptions={{headerShown:false}}>
            <Tab.Screen name="User" component={User} options={{
            tabBarIcon: () => (<MaterialCommunityIcons name='face-man-profile' size={30} />)
            }}/>
            <Tab.Screen name="Car" component={Car} options={{
            tabBarIcon: () => (<MaterialCommunityIcons name='car' size={30} />)
            }}/>
            <Tab.Screen name="Rent" component={Rent} options={{
            tabBarIcon: () => (<MaterialCommunityIcons name='credit-card-plus' size={30} />)
            }}/>
        </Tab.Navigator>
    )
}