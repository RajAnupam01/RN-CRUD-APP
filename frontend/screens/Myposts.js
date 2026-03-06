import {  useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Footer from '../components/menus/Footer'
import axios from 'axios'
import { AuthContext } from '../context/authContext'
import PostCard from '../components/PostCard'

const Myposts = () => {

    const [state] = useContext(AuthContext)
    const {token} = state

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)


    const getUserPosts = async() => {
        try {
            setLoading(true)
            const {data} =await axios.get('http://10.200.6.197:8080/api/v1/post/user-post',{ headers: { Authorization: `Bearer ${token && token}` } })
            setLoading(false)
            setPosts(data?.userPosts)
        } catch (error) {
            setLoading(false)
            console.log(error)
            alert(error)
        }
    }

    useEffect(()=>{
        getUserPosts()
    },[])

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <PostCard posts={posts} cantrash={true} />
            </ScrollView>
            <View>
                <Footer />
            </View>
        </View>
    )
}

export default Myposts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        margin: 10,
        padding: 10
    }
})