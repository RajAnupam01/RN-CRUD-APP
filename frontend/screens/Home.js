import { useContext } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PostContext } from "../context/postContext"
import Footer from '../components/menus/Footer'
import PostCard from '../components/PostCard'

const Home = () => {

  const [posts] = useContext(PostContext)
  return (
    <View style={styles.container}>
      <ScrollView>
        <PostCard posts={posts} />
      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }} >
        <Footer />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
    padding:10
  }
})