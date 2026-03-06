import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const PostContext = createContext()

const PostProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const getAllPost = async() => {
        setLoading(true)
        try {
            const {data} = await axios.get("http://10.200.6.197:8080/api/v1/post/all-post")
            setLoading(false)
            setPosts(data?.posts)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // initial post
    useEffect(()=>{
        getAllPost()
    },[])

    return (
        <PostContext.Provider value={[posts,setPosts,getAllPost]} >
            {children}
        </PostContext.Provider>
    )

}

export {PostContext,PostProvider}





