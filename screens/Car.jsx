import { Text, View } from 'react-native'
import { TextInput, useTheme, Button } from 'react-native-paper'
import {useForm, Controller} from 'react-hook-form'
import { styles } from '../assets/styles/styles'
import { CrearAuto } from './Objects/Cars'
import User from './User'

let text = ""

export default function RegisterCar({navigation}) {

  const theme = useTheme()

  const {control, handleSubmit, formState:{errors}, reset} = useForm({
    defaultValues: {
      plateNumber: '',
      brand: ''
    }
  })

  const onSubmit = (dataform) => {
    const {plateNumber, brand} = dataform

    if(CrearAuto(plateNumber, brand)){
      text = ""
      reset()
      navigation.navigate(User)
    }else{
      text = "Placa auto ya existe"
    }
  }

  const listCars = () => {
    navigation.navigate('CarList')
  }
  
  return (
      <View style={styles.container}>
        <Text style={{color:'red'}}>{text}</Text>
        <Controller
          control={control}
          rules={{
           required: true,
           pattern: /^[A-Za-z-0-9]+$/g
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label = "Placa"
              mode = "outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              theme={{
                colors: {
                  primary: theme.colors.black
                }
              }}
            />
          )}
          name="plateNumber"
        />

        {errors.plateNumber?.type == 'required' && <Text style={{color:'red'}}> La placa del auto es obligatoria</Text>}
        {errors.plateNumber?.type == 'pattern' && <Text style={{color:'red'}}> La marca del auto solo puede contener letras y numeros</Text>}

        <Controller
          control={control}
          rules={{
           required: true,
           pattern: /^[A-Za-z]+$/g
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label = "Marca"
              mode = "outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              theme={{
                colors: {
                  primary: theme.colors.black
                }
              }}
            />
          )}
          name="brand"
        />

        {errors.brand?.type == 'required' && <Text style={{color:'red'}}> La marca del auto es obligatoria</Text>}
        {errors.brand?.type == 'pattern' && <Text style={{color:'red'}}> La marca del auto solo puede contener letras y espacios</Text>}

        <Button icon="send" mode="contained" buttonColor="#3183c8" style={{marginTop:"20px"}} onPress={handleSubmit(onSubmit)}>
          Registrar auto
        </Button>

        <Button mode="contained" buttonColor="#3183c8" style={{marginTop:"20px"}} onPress={listCars}>
          Listar Autos
        </Button>
      </View>
  )
}