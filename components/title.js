import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🧠 QUIZZER</Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        fontSize: 36,
        fontWeight: '900',
        color: 'white',
        letterSpacing: 3,
        textShadowColor: '#00000088',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        textTransform: 'uppercase',
    },
});
