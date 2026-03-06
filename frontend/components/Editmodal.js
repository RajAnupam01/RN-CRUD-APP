import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/authContext';

const Editmodal = ({ modalVisible, setModalVisible, post }) => {
    const [state] = useContext(AuthContext)
    const { token } = state

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    const updatedPostHandler = async (id) => {
        try {
            setLoading(true)
            const { data } = axios.put(`http://10.200.6.197:8080/api/v1/post/update-post/${id}`, { title, description }, { headers: { Authorization: `Bearer ${token && token}` } });
            setLoading(false)
            alert(data && data.message)
            navigation.navigate("Home")
        } catch (error) {
            setLoading(false)
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        setTitle(post?.title)
        setDescription(post?.description)
    }, [post])


    return (
        <View style={styles.container} >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Update your Posts</Text>
                        <Text>Title</Text>
                        <TextInput
                            style={styles.inputbox}
                            value={title}
                            onChangeText={(text) => setTitle(text)}
                        />
                        <Text>Description</Text>
                        <TextInput
                            style={styles.inputbox}
                            value={description}
                            multiline={true}
                            numberOfLines={6}
                            onChangeText={(text) => setDescription(text)}
                        />
                        <View style={styles.btncontainer} >
                            <Pressable
                                style={[styles.button, styles.buttonClose, { backgroundColor: 'blue' }]}
                                onPress={() => { updatedPostHandler(post && post?._id), setModalVisible(!modalVisible) }}>
                                <Text style={styles.textStyle}>{loading ? <Text>please wait</Text> : <Text>Update</Text>}</Text>
                            </Pressable>


                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default Editmodal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    inputbox: {
        marginBottom: 20,
        backgroundColor: 'lightgray',
        marginTop: 10,
        paddingLeft: 10
    },
    btncontainer: {
        flexDirection: 'row',
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: 100,
        marginVertical: 10,
        margin: 10
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#ea2121',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})