import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import he from 'he';

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState(null);
    const [ques, setQues] = useState(0);
    const [selectedOption , setSelectedOption] = useState(null);
    const [isOptionDisabled , setIsoptionDisabled] = useState(false);
    const [score , setScore] = useState(0);

    const getQuestions = async () => {
        const url = 'https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple&encode=url3986';
        const result = await fetch(url);
        const data = await result.json();
        setQuestions(data.results);
    };

    useEffect(() => {
        getQuestions();
    }, []);

    const handleFinish = () => {
        navigation.navigate('Result' , {score})
    }

    const  handleNextPress = () =>{
        if(selectedOption) {
            const correctAnswer = questions[ques].correct_answer
            if(decodeURIComponent(selectedOption) === decodeURIComponent(correctAnswer))
            {
                setScore(score + 1)
            }
        }
        setQues(ques+1)
        setSelectedOption(null)
        setIsoptionDisabled(false)
    };

    const handleSelectedOption = (option) => {
            setSelectedOption(option);
            setIsoptionDisabled(true);
    };

    const calculateScore = () => {
        let score = 0;
        questions.foreach(question , index => {
            if (decodeURIComponent(question.correct_answer) === selectedOption){
                score += 1;
            }
        });
        return score;
    }



    return (
        <View style={styles.container}>
            {questions && questions[ques] && (
                <View style={styles.parent}>
                    <View style={styles.question}>
                        <Text style={styles.questions}> Q.{ques+1} {decodeURIComponent( questions[ques].question)}</Text>
                    </View>
                        <View style={styles.options}>
                            {questions[ques].incorrect_answers.concat(questions[ques].correct_answer)
                                .sort()
                                .map((option, index) => {
                                    const decodedOption = decodeURIComponent(option);
                                    const correctAnswer = decodeURIComponent(questions[ques].correct_answer);

                                    let backgroundColor = '#219EBC';

                                    if (isOptionDisabled) {
                                        if (decodedOption === correctAnswer) {
                                            backgroundColor = 'green';
                                        } else if (decodedOption === decodeURIComponent(selectedOption)) {
                                            backgroundColor = 'red';
                                        }
                                    }

                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => handleSelectedOption(option)}
                                            disabled={isOptionDisabled}
                                            style={[styles.option, { backgroundColor }]}
                                        >
                                            <Text style={styles.optionText}>{decodedOption}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                        </View>

                    <View style={styles.buttons}>
                            <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                                <Text style={styles.buttonText}>SKIP</Text>
                            </TouchableOpacity>
                        {ques !==19 && (
                            <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                                <Text style={styles.buttonText}>NEXT</Text>
                            </TouchableOpacity>
                        )}
                        {ques ===19 && (
                            <TouchableOpacity style={styles.button} onPress={handleFinish}>
                                <Text style={styles.buttonText}>FINISH</Text>
                            </TouchableOpacity>
                        )}                       
                    </View>
                </View>
            )}
        </View>
    );
};

export default Quiz;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9ACBD0',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingVertical: 20,
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
    questions: {
        fontSize: 30,
        fontWeight: '600',
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
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    parent: {
        flex: 1,
    },
    optionText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#023047',
        textAlign: 'center',
    },
    
});
