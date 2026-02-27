import { StyleSheet, Text, TouchableOpacity } from 'react-native'


const SubmitBtn = ({ handleSubmit, btnTitle, loading }) => {
    return (
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit} >
            <Text style={styles.btnText} >
                {loading ? "Please Wait..." : btnTitle}
            </Text>
        </TouchableOpacity>
    )
}

export default SubmitBtn

const styles = StyleSheet.create({
    submitBtn: {
        backgroundColor: '#1e2225',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 80,
        justifyContent: 'center',
        marginBottom: 20
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 400
    }
})