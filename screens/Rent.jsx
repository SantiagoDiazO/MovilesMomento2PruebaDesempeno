import { Text, View } from 'react-native'
import { TextInput, useTheme, Button } from 'react-native-paper'
import {useForm, Controller} from 'react-hook-form'
import { styles } from '../assets/styles/styles'
import { CrearRenta } from './Objects/Rents'
import User from './User'

let text = ""

export default function RegisterRent({navigation}) {

  const theme = useTheme()

  const {control, handleSubmit, formState:{errors}} = useForm({
    defaultValues: {
      rentNumber: '',
      username: '',
      plateNumber: '',
      rentDate: ''
    }
  })

  const onSubmit = (dataform) => {
    const {rentNumber, username, plateNumber, rentDate} = dataform

    if(CrearRenta(rentNumber, username, plateNumber, rentDate)){
      text = ""
      navigation.navigate(User)
    }else{
      text = "Datos renta erroneos"
    }
  }
  
  return (
      <View style={styles.container}>
        <Text style={{color:'red'}}>{text}</Text>
        <Controller
          control={control}
          rules={{
           required: true,
           pattern: /^[0-9]+$/g
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label = "Numero de Renta"
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
          name="rentNumber"
        />

        {errors.rentNumber?.type == 'required' && <Text style={{color:'red'}}> El numero de renta es obligatorio</Text>}
        {errors.rentNumber?.type == 'pattern' && <Text style={{color:'red'}}> El numero de renta solo puede contener numeros</Text>}

        <Controller
          control={control}
          rules={{
           required: true,
           pattern: /^[A-Za-z-0-9]+$/g
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label = "Usuario"
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
          name="username"
        />

        {errors.username?.type == 'required' && <Text style={{color:'red'}}> El usuario es obligatorio</Text>}
        {errors.username?.type == 'pattern' && <Text style={{color:'red'}}> El usuario no debe tener letras, numeros y/o espacios</Text>}
        
        <Controller
          control={control}
          rules={{
           required: true,
           pattern: /^[A-Za-z-0-9]+$/g
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label = "Placa del auto"
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
        {errors.plateNumber?.type == 'pattern' && <Text style={{color:'red'}}> La plata del auto solo puede contener letras o numeros</Text>}

        <Controller
          control={control}
          rules={{
           required: true,
           pattern: /^[0-9-/]+$/g
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label = "Fecha de Renta"
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
          name="rentDate"
        />

        {errors.rentDate?.type == 'required' && <Text style={{color:'red'}}> La fecha de renta es obligatoria</Text>}
        {errors.rentDate?.type == 'pattern' && <Text style={{color:'red'}}> La fecha debe estar en formato dd/mm/yyyy</Text>}

        <Button icon="send" mode="contained" buttonColor="#3183c8" style={{marginTop:"20px"}} onPress={handleSubmit(onSubmit)}>
          Registrar renta
        </Button>
      </View>
  )
}