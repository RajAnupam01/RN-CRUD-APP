import { SafeAreaView as SafeArea } from "react-native-safe-area-context"
import Register from "./screens/auth/Register"
import Login from "./screens/auth/Login"
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <SafeArea style={{ flex: 1 }}>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name='Register'component={Register} options={{headerShown:false}} />
        <Stack.Screen name = 'Login' component={Login} options={{headerShown:false}} />
      </Stack.Navigator>
     </NavigationContainer>
    </SafeArea>
  )
}
