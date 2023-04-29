import { Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import {useForm, Controller} from 'react-hook-form'
import { styles } from '../assets/styles/styles'

export default function RegisterScreen({navigation}) {

    let usuarioPrueba = "Santiago"
    let contraseñaPrueba = "123456789"

  const {control, handleSubmit, formState:{errors}} = useForm({
    defaultValues: {
      user: '',
      password: ''
    }
  })

  const onSubmit = (dataform) => {
    console.log(dataform)
    const {user, password} = dataform

    if(user == usuarioPrueba && password == contraseñaPrueba){
        //navigation.navigate('Profile')
        <Text>Correcto</Text>
    }else{
      <Text>Usuario y/o contraseña incorrecto</Text>
    }
  }
  
  return (
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{
           required: true,
           maxLength: 30,
           minLength: 2,
           pattern: /^[A-Za-zÑñÁÉÍÓÚáéíóú]+$/g
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label = "Usuario"
              mode = "outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="user"
        />

        {errors.user?.type == 'required' && <Text style={{color:'red'}}> El usuario es obligatorio</Text>}
        {errors.user?.type == 'maxLength' && <Text style={{color:'red'}}> El usuario tiene un maximo de 30 chars</Text>}
        {errors.user?.type == 'minLength' && <Text style={{color:'red'}}> El usuario tiene un minimo de 2 chars</Text>}
        {errors.user?.type == 'pattern' && <Text style={{color:'red'}}> El usuario no debe tener letras y/o espacios</Text>}
        
        <Controller
          control={control}
          rules={{
           required: true,
           maxLength: 30,
           minLength: 5,
           pattern: /^[A-Za-z-0-9]+$/g
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label = "Password"
              mode = "outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />

        {errors.password?.type == 'required' && <Text style={{color:'red'}}> La contraseña es obligatoria</Text>}
        {errors.password?.type == 'maxLength' && <Text style={{color:'red'}}> La contraseña tiene un maximo de 30 chars</Text>}
        {errors.password?.type == 'minLength' && <Text style={{color:'red'}}>La contraseña tiene un minimo de 5 chars</Text>}
        {errors.password?.type == 'pattern' && <Text style={{color:'red'}}> La contraseña no debe contener caracteres especiales</Text>}

        <Button icon="send" mode="contained" style={{marginTop:"20px"}} onPress={handleSubmit(onSubmit)}>
          Enviar
        </Button>
      </View>
  )
}