import { useContext, useState,useCallback } from 'react'
import { ScrollView, StyleSheet, Text, View,RefreshControl } from 'react-native'
import { PostContext } from "../context/postContext"
import Footer from '../components/menus/Footer'
import PostCard from '../components/PostCard'

const Home = () => {

   const [posts, setPosts, getAllPost] = useContext(PostContext)
  const [refreshing , setRefreshing] = useState(false)

  const onRefresh = useCallback(async()=>{
    setRefreshing(true)
    await getAllPost()
    setTimeout(() => {
      setRefreshing(false)
    },1000);
  },[])
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}   >
        <PostCard posts={posts} />
      </ScrollView>
      <View>
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