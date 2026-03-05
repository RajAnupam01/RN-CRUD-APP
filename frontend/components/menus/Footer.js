import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'


const Footer = () => {
    const navigation = useNavigation()
    const route = useRoute()
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                <FontAwesome6 name='house' style={styles.iconStyle} color={route.name === 'Home' && 'orange'} />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Post')} >
                <FontAwesome6 name='plus-square' style={styles.iconStyle} color={route.name === 'Post' && 'orange'} />
                <Text>Post</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => navigation.navigate('Myposts')} >
                <FontAwesome6 name='list' style={styles.iconStyle} color={route.name === 'Myposts' && 'orange'} />
                <Text>MyPosts</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Account')} >
                <FontAwesome6 name='user' style={styles.iconStyle} color={route.name === 'Account' && 'orange'} />
                <Text>Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: 'center',
        fontSize: 25
    }
})