import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
 import { FontAwesome6 } from '@expo/vector-icons'

const Footer = () => {
    return (
        <View style={styles.container} >
            <TouchableOpacity>
                <FontAwesome6 name='house' style={styles.iconStyle} />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome6 name='plus-square' style={styles.iconStyle} />
                <Text>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome6 name='info' style={styles.iconStyle} />
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome6 name='user' style={styles.iconStyle} />
                <Text>Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        justifyContent:'space-between'
    },
    iconStyle:{
        marginBottom:3,
        alignSelf:'center',
        fontSize:25
    }
})