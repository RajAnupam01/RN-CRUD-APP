import { StyleSheet, Text, View } from 'react-native'

import moment from 'moment'

const PostCard = ({ posts }) => {
    return (
        <View style={styles.container}  >
            <Text style={styles.heading} >Total Post {posts?.length}</Text>
            {posts?.map((post, i) => (
                <View style={styles.card} key={i} >
                        <View  >
                            <Text style={styles.title} >Title: {post?.title} </Text>
                            <Text style={styles.desc} >Description: {post?.description} </Text>
                        </View>
                        <View style={styles.footer} >
                            <Text style={styles.footertxt} >PostedBy: {post?.postedBy?.name} </Text>
                            <Text style={styles.footertxt}  >CreatedAt:{moment(post?.createdAt).format('DD:MM:YYYY')}</Text>
                        </View>
                    </View>
            ))  }
        </View>
    )
}

export default PostCard

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    heading: {
        color: 'green',
        textAlign: 'center',
    },
    card: {
       
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 0.2,
        borderColor: 'gray',
        marginVertical: 10,
        borderRadius: 10,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    desc: {
        fontSize: 18,
        marginVertical:5
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:10
    },
    footertxt: {
        fontSize: 18,

    }
})