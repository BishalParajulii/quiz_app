import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

const Quiz = () => {
    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text>Image this is question</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity>
                    <Text>Option 1</Text>
                    <Text>Option 1</Text>
                    <Text>Option 1</Text>
                    <Text>Option 1</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <Text>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Quiz;

const styles = StyleSheet.create({
    container : {
        padding : 20,
        height : '100%'
    },
    question : {
        marginVertical : 16,
    },
    options : {
        marginVertical : 16,
        flex : 1
    },
    buttons :{
        marginBottom : 12 ,
        paddingVertical : 5,
        justifyContent : 'space-between',
        flexDirection : 'row'

    }


});
