import { View } from 'react-native'
import { styles } from '../assets/styles/styles'
import { FlatList } from 'react-native-web'
import { ListarCarros } from './Objects/Cars'

export default function CarList({navigation}){
    return(
        <View style={styles.container}>
            <FlatList 
                data={ListarCarros} 
                keyExtracto={(item)=>item.plateNumber}
                renderItem={renderItem}
            />
            <Text>Hola</Text>
        </View>
    )
}