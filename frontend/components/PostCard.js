import { StyleSheet, Text, View, Alert } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import moment from 'moment'
import { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigation } from "@react-navigation/native"
import { AuthContext } from '../context/authContext'


const PostCard = ({ posts, cantrash }) => {

    const [state] = useContext(AuthContext)
    const { token } = state


    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    const handleDeletePrompt = (id) => {
        Alert.alert("Attention", "Are you sure want to delete this post?", [
            {
                text: 'Cancel',
                onPress: () => {
                    console.log("Cancel press")
                }
            },
            {
                text: 'Delete',
                onPress: () => handleDeletePost(id)
            }
        ])
    }


    const handleDeletePost = async (id) => {
        try {
            setLoading(true)
            const data = await axios.delete(`http://10.105.241.197:8080/api/v1/post/delete-post/${id}`, { headers: { Authorization: `Bearer ${token && token}` } })
            setLoading(false)
            alert(data?.data.message)
            navigation.navigate("Home")

        } catch (error) {
            setLoading(false)
        }
    }
    return (
        <View style={styles.container}  >
            <Text style={styles.heading} >Total Post {posts?.length}</Text>
            {posts?.map((post, i) => (
                <View style={styles.card} key={i} >
                    {cantrash && (<View style={{ marginVertical: 10 }} >
                        <Text>
                            <FontAwesome6 name="trash" color={"red"} size={16} onPress={() => handleDeletePrompt(post?._id)} />
                        </Text>
                    </View>)}

                    <View  >
                        <Text style={styles.title} >Title: {post?.title} </Text>
                        <Text style={styles.desc} >Description: {post?.description} </Text>
                    </View>
                    <View style={styles.footer} >
                        {post?.postedBy?.name && <Text style={styles.footertxt} >PostedBy: {post?.postedBy?.name} </Text>}

                        <Text style={styles.footertxt}  >CreatedAt:{moment(post?.createdAt).format('DD:MM:YYYY')}</Text>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default PostCard

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        color: 'green',
        textAlign: 'center',
    },
    card: {

        backgroundColor: 'white',
        padding: 10,
        borderWidth: 0.2,
        borderColor: 'gray',
        marginVertical: 10,
        borderRadius: 10,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    desc: {
        fontSize: 18,
        marginVertical: 5
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    footertxt: {
        fontSize: 18,

    }
})