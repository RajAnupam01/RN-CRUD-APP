import { useContext,useState } from 'react'
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import { AuthContext } from '../context/authContext'
import Footer from '../components/menus/Footer'
import axios from 'axios'

const Account = () => {
  const [state,setState] = useContext(AuthContext)
  const {user,token} = state

  const [name,setName] = useState(user?.name);
  const [password,setPassword]= useState(user?.password);
  const [email] = useState(user?.email)

  const [loading, setLoading] = useState(false)


  const handleUpdate = async() => {
    try {
     setLoading(true)
     const {data} = await axios.put('http://10.208.158.197:8080/api/v1/auth/updated-user',{name,email,password},{headers:{Authorization:`Bearer ${token && token}`}})
     setLoading(false)
     let UD = JSON.stringify(data)
     setState({...state,user:UD?.updatedUser})
     alert(data && data.message)
    } catch (error) {
      alert(error.response.data.message)
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
       <View style={{alignItems:'center'}} >
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDdc7ZHr1gAvUADsK2GDUuyffGCX61n8zJA&s'}} style={{width:200, height:200}} />
       </View>
       <Text style={styles.warningTxt} >You can only update your name and password</Text>
       <View  style={styles.InputCont}  >
        <Text style={styles.InputTxt} >Name</Text>
        <TextInput
          value={name}
          onChangeText={(text)=>setName(text) }
          style={styles.InputBox}
        />
       </View>

        <View  style={styles.InputCont}  >
        <Text style={styles.InputTxt} >Email</Text>
        <TextInput
          value={email}
          style={styles.InputBox}
        />
       </View>

        <View  style={styles.InputCont}  >
        <Text style={styles.InputTxt} >Password</Text>
        <TextInput
          value={password}
          onChangeText={(text)=>setPassword(text)}
          style={styles.InputBox}
          secureTextEntry={true}
        />
       </View>
       <View style={{alignItems:'center'}} >
        <TouchableOpacity style={styles.btn} onPress={handleUpdate} >
          <Text style={styles.btnTxt} >{loading? "please wait":"updated profile"}</Text>
        </TouchableOpacity>
       </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }} >
        <Footer />
      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 40,
    margin: 10
  },
  warningTxt:{
    fontSize:18,
    color:'red',
    textAlign:'center',
    marginTop:10,
    marginBottom:10
  },
  InputCont:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginBottom:20,
    
  },
  InputTxt:{
    fontWeight:'bold',
    width:'70',
    color:'gray',
    fontSize:15
  },
  InputBox:{
    width:250,
    backgroundColor:'#fff',
    marginLeft:10,
    fontSize:16,
    borderRadius:10,
    paddingLeft:20,
  },
  btn:{
    marginTop:10,
    height:40,
    width:250,
    borderRadius:20,
    color:'white',
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center'
  },
  btnTxt:{
    color:'white'
  }
})