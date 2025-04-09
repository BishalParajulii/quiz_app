import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Quiz = ({ navigation }) => {
    const [questions , setQuestions] = useState();
    const getQuestions = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple'
        const result = await fetch(url);
        const data = await result.json();
        setQuestions(data.result);

    };
    useEffect( ()=>{
        getQuiz();
    },[]);
    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text style={styles.questions}>Q. Image this is question</Text>
            </View>
            <View style={styles.options}>
                
            <TouchableOpacity>
                <Text style={styles.option}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.option}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.option}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.option}>Option 1</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button, { marginRight: 10 }]}>
                    <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate("Result")}>
                    <Text>END</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default Quiz;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9ACBD0',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        height: '100%',
        paddingVertical : 20
    },
    question: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#219EBC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
        letterSpacing: 1,
    },
    questions : {
            fontSize : 30,
            fontWeight : 450

    },
    option: {
        backgroundColor: '#219EBC',
        padding: 16,
        marginVertical: 8,
        borderRadius: 20,
        fontSize: 18,
        fontWeight: '600',
        color: '#023047',
        textAlign: 'center',
        elevation: 3, // Android shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }    
});
