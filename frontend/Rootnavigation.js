import { AuthProvider } from './context/authContext'
import ScreenMenu from './components/menus/ScreenMenu'

const Rootnavigation = () => {
  return (
    <AuthProvider>
     <ScreenMenu/>
    </AuthProvider>
  )
}

export default Rootnavigation