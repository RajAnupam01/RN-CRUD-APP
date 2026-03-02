import { StyleSheet, Text, View } from 'react-native'
import Footer from '../components/menus/Footer'

const About = () => {
  
  return (
    <View style={styles.container}>
        <Text>About</Text>
      <View style={{ flex: 1, justifyContent: 'flex-end' }} >
        <Footer />
    </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    marginTop:40,
    margin:10
  }
})