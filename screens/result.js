import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';

const Result = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image source={require('../assets/quiz.jpg')} style={styles.banner} resizeMode='contain' />
            </View>
            <View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.button}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9ACBD0', // Dark elegant background
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        height : '100%'
    },
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#219EBC',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 5, // Android shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        width: '80%',
        alignItems: 'center',
        marginBottom: 40
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
        letterSpacing: 1,
    },

});
