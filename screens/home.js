import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'; // ✅ Added Image
import Title from '../components/title';

const Home = () => {
    return (
        <View>
            <Title />
            <View style={styles.bannerContainer}>
                <Image source={require('../assets/quiz.jpg')} style={styles.banner} resizeMode='contain' />
            </View>

            <TouchableOpacity>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
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
