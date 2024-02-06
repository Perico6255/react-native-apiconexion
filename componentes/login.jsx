import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
export default function Login() {
  const handlerButton = () => {
    Alert.alert("press")
  }
  return (
    <View>
      <View>
        <Text>username:</Text>
        <TextInput>hola</TextInput>
      </View>
      <View>
        <Text>username:</Text>
        <TextInput>hola</TextInput>
      </View>
      <TouchableOpacity onPress={handlerButton}>
        <Text>Boton</Text>
      </TouchableOpacity>

    </View>
  )
}
