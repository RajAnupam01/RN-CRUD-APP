import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home'
import Register from '../../screens/auth/Register'
import Login from '../../screens/auth/Login'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import Header from './Header'
import Post from '../../screens/Post'
import Account from '../../screens/Account'
import Myposts from '../../screens/Myposts'

const ScreenMenu = () => {

    const [state] = useContext(AuthContext)
    //auth condition
    const authUser = state?.user && state?.token
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='Login'  >
            {authUser ? (

                <>
                    <Stack.Screen name='Home' component={Home} options={{ title: 'Crud App', headerRight: () => <Header /> }} />

                    <Stack.Screen name='Post' component={Post} options={{ title: 'Post' }} />


                    <Stack.Screen name='Myposts' component={Myposts} options={{ title: 'Myposts' }} />

                    <Stack.Screen name='Account' component={Account} options={{ title: 'Account' }} />


                </>
            ) : (
                <>

                    <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                </>
            )}

        </Stack.Navigator>
    )
}

export default ScreenMenu
