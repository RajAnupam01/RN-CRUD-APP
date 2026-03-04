import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Footer from '../components/menus/Footer'
import { useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/authContext'
import { PostContext } from '../context/postContext'

const Post = ({navigation}) => {

 const [state] = useContext(AuthContext)
 const {token} = state
  
 const [posts, setPosts] = useContext(PostContext)

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false)

  const handlePostData = async() => {
    try {
      setLoading(true)
      if(!title || !description){
        alert("Please add post title and description.")
      }
      const{data} = await axios.post('http://10.92.81.197:8080/api/v1/post/create-post',{title,description},{headers:{Authorization:`Bearer ${token && token}`}})
      setLoading(false)
      setPosts([...posts,data?.post])
      alert(data && data.message)
      navigation.navigate('Home')

    } catch (error) {
      
      setLoading(false)
      alert(error.response.data.message)
      console.log(error)
    }
  }


  return (
    <View style={styles.container}>
      <View style={{alignItems:'center'}} >
        <Text style={styles.heading} >CREATE A POST</Text>
        <TextInput
        placeholder='add post title'
        placeholderTextColor={'gray'}
        style={styles.inputbox}
        value={title}
        onChangeText={(text) => setTitle(text)}
        />
        <TextInput
        placeholder='add post description'
        placeholderTextColor={'gray'}
        multiline={true}
        numberOfLines={6}
        value={description}
        onChangeText={(text) => setDescription(text) }
        style={styles.inputbox}
        />
      </View>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.postbtn} onPress={handlePostData} >
          <Text  style={styles.postbtntxt} >{loading ? <Text>please wait</Text>:<Text>create a post</Text>}</Text>
        </TouchableOpacity>
      </View>
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
    margin:10,
    marginTop:20,

  },
  heading:{
    fontSize:25,
    fontWeight:'bold',
  },
  inputbox:{
    backgroundColor:'#fff',
    width:320,
    marginTop:30,
    fontSize:16,
    paddingLeft:15,
    borderColor:'gray',
    borderWidth:1,
  },
  postbtn:{
    backgroundColor:'black',
    width:320,
    marginTop:30,
    height:40,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  postbtntxt:{
    color:'#fff',
    fontSize:16
  }
})