import { View, Button} from 'react-native'
import { styles } from '../assets/styles/styles'

export default function User({navigation}){
    return(
        <View style={styles.container}>
            <View style={{marginBottom:25}}>
                <Button title='Iniciar Sesion' onPress={()=>{
                    navigation.navigate('Login')
                }}></Button>
            </View>
            
            <Button title='Registrarse' onPress={()=>{
                navigation.navigate('Register')
            }}></Button>
        </View>
    )
}