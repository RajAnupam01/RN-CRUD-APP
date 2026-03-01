import { SafeAreaView as SafeArea } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import Rootnavigation from "./Rootnavigation"

export default function App() {
  return (
    <SafeArea style={{ flex: 1 }}>
      <NavigationContainer>
       <Rootnavigation/>
      </NavigationContainer>
    </SafeArea>
  )
}
