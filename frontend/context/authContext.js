import React, { createContext, useEffect,useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

//context
const AuthContext = createContext()

//provider
const AuthProvider = ({ children }) => {

    // global state
    const [state, setState] = useState({
        user: null,
        token: ''
    })

    // initial local storage data
    useEffect(() => {
        const loadLocalStorageData = async () => {
            let data = await AsyncStorage.getItem('@auth')
            let loginData = JSON.parse(data)
            setState({ ...state, user:loginData?.user, token:loginData?.token })
        }
        loadLocalStorageData()
    }, [])



    return (
        <AuthContext.Provider value={[state, setState]} >{children}</AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }