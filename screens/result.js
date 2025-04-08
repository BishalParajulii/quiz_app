import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';

const Result = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image source={require('../assets/quiz.jpg')} style={styles.banner} resizeMode='contain' />
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Home</Text>
                    
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result;

const styles = StyleSheet.create({
    container : {
        padding : 20
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

});
