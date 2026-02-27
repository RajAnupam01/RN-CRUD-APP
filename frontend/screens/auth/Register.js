import { Alert, StyleSheet, Text, View } from 'react-native'
import InputBox from '../../components/forms/InputBox'
import { useState } from 'react'
import SubmitBtn from '../../components/forms/SubmitBtn';

const Register = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        try {
            setLoading(true)
            if(!name || !email || !password){
            Alert.alert("please fill all fields.")
              setLoading(false)
              return;
            }
            setLoading(false)
            console.log("Register data",{name,email,password})
            
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <View style={styles.container} >
            <Text style={styles.pageTitle} >Register</Text>
            <View style={{ marginHorizontal: 20 }}>
                <InputBox
                    inputTitle={'Name'}
                    value={name}
                    setValue={setName}
                />
                <InputBox
                    inputTitle={'Email'}
                    keyboardType={"email-address"}
                    autoComplete="email"
                    value={email}
                    setValue={setEmail}
                />
                <InputBox
                    inputTitle={'Password'}
                    secureTextEntry={true}
                    autoComplete="password"
                    value={password}
                    setValue={setPassword}
                />
            </View>
            <SubmitBtn 
            btnTitle="click to sign in" 
            loading={loading} 
            handleSubmit={handleSubmit}
            />
            <Text style={styles.LinkText} >Already Registered Please<Text style={styles.Linktxt} onPress={()=>navigation.navigate('Login')} > Login</Text></Text>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#e1d5c9'
    },
    pageTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1e2225',
        marginBottom: 20
    },
    LinkText:{
        fontSize:20,
        textAlign:'center'
    },
    Linktxt:{
        color:'red'
    }

})