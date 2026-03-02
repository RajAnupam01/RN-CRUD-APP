import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
 import { FontAwesome6 } from '@expo/vector-icons'
 import AsyncStorage from "@react-native-async-storage/async-storage";


const Header = () => {
    const [state, setState] = useContext(AuthContext)

    const handleLogOut = async() => {
      setState({token:'', user:null})
      await AsyncStorage.removeItem('@auth')
      alert('logout successfully.')
    }

  return (
    <View>
      <TouchableOpacity onPress={handleLogOut} >
         <FontAwesome6 name='arrow-left' color="red" style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
     iconStyle:{
        marginBottom:3,
        alignSelf:'center',
        fontSize:25
    }
})