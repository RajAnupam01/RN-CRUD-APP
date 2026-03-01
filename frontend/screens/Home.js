import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../context/authContext'
import Footer from '../components/menus/Footer'

const Home = () => {
  const [state] = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{JSON.stringify(state,null,4)}</Text>
      <Footer/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between'
  }
})