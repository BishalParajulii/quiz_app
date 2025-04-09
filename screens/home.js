import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, StatusBar } from 'react-native';
import Title from '../components/title';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#023047" />
            <Title />
            <View style={styles.bannerContainer}>
                <Image source={require('../assets/quiz.jpg')} style={styles.banner} resizeMode='contain' />
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate("Quiz")}
                style={styles.button}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

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
        height: 700,
        width: 350,
        borderRadius: 20,
    },
    bannerContainer: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
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
