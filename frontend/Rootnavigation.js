import { AuthProvider } from './context/authContext'
import { PostProvider } from "./context/postContext"
import ScreenMenu from './components/menus/ScreenMenu'

const Rootnavigation = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <ScreenMenu />
      </PostProvider>
    </AuthProvider>
  )
}

export default Rootnavigation