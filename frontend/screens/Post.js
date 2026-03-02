import { StyleSheet, Text, View } from 'react-native'
import Footer from '../components/menus/Footer'

const Post = () => {

  return (
    <View style={styles.container}>
        <Text>Post</Text>
      <View style={{ flex: 1, justifyContent: 'flex-end' }} >
        <Footer />
    </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    marginTop:40,
    margin:10
  }
})