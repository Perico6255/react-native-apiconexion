import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native"
export default function Login() {
  const handlerButton = () => {
    Alert.alert("press")
  }
  return (
    <View style={styles.container}>
      <View style={styles.usarnameBox}>
        <Text style={styles.usernameLabel}>username:</Text>
        <TextInput style={styles.usernameInput}>hola y adios</TextInput>
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
const styles = StyleSheet.create({
  container: {
    backgroundColor:"#999",
    paddingHorizontal:50,
    paddingVertical:80,

  },
  usarnameBox:{
    flexDirection:"row"

  },
  usernameLabel: {
    backgroundColor:"#0f0",
  },
  usernameInput:{
    backgroundColor:"#f00",
  }

})
