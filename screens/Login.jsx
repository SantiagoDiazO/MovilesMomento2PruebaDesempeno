import { Text, View } from 'react-native'
import { TextInput, useTheme, Button } from 'react-native-paper'
import {useForm, Controller} from 'react-hook-form'
import { styles } from '../assets/styles/styles'
import { BuscarPassword, BuscarUsername } from './Objects/Users'
import HomeTabs from './HomeTabs'

let text = ""

export default function LoginScreen({navigation}) {
  const theme = useTheme()
  const {control, handleSubmit, formState:{errors}} = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const onSubmit = (dataform) => {
    const {username, password} = dataform

    if(BuscarPassword(username, password)){
      text = ""
      navigation.navigate(HomeTabs)
    }else{
      let usernameValid = BuscarUsername(username)
      if(usernameValid){
        text = "Usuario o contraseña incorrecto"
      }
    }
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
              label = "Password"
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
          name="password"
        />

        {errors.password?.type == 'required' && <Text style={{color:'red'}}> La contraseña es obligatoria</Text>}
        {errors.password?.type == 'pattern' && <Text style={{color:'red'}}> La contraseña no debe contener caracteres especiales</Text>}

        <Button icon="send" mode="contained" buttonColor="#3183c8" style={{marginTop:"20px"}} onPress={handleSubmit(onSubmit)}>
          Iniciar Sesion
        </Button>
      </View>
  )
}