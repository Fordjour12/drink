import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function index() {
    const [intakeGoal, setIntakeGoal] = useState('2000');
    const [inputValue, setInputValue] = useState('2000');
    const STORAGE_KEY = '@water_intake_goal';

    useEffect(() => {
        loadStoredGoal();
    }, []);

    const loadStoredGoal = async () => {
        try {
            const storedGoal = await AsyncStorage.getItem(STORAGE_KEY);
            if (storedGoal) {
                setIntakeGoal(storedGoal);
                setInputValue(storedGoal);
            }
        } catch (error) {
            console.error('Error loading water intake goal:', error);
        }
    };

    const handleSetGoal = async () => {
        const numValue = Number.parseInt(inputValue);
        if (numValue >= 500 && numValue <= 5000) {
            setIntakeGoal(inputValue);
            try {
                await AsyncStorage.setItem(STORAGE_KEY, inputValue);
            } catch (error) {
                console.error('Error saving water intake goal:', error);
            }
        } else {
            alert('Water intake goal must be between 500ml and 5000ml');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Set Daily Water Intake Goal (ml)</Text>
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={setInputValue}
                keyboardType="numeric"
                maxLength={4}
                placeholder="2000"
            />
            <TouchableOpacity style={styles.button} onPress={handleSetGoal}>
                <Text style={styles.buttonText}>Save Goal</Text>
            </TouchableOpacity>
            <Text style={styles.currentGoal}>Current Goal: {intakeGoal}ml</Text>
            <Text style={styles.currentGoal}>
                Current Goal in Liters: {(Number(intakeGoal) / 1000).toFixed(2)}L
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    label: {
        fontSize: 30,
        marginBottom: 20,
        color: '#333',
        fontFamily: 'Playfair900',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        width: '100%',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    current: {
        marginTop: 20,
        fontSize: 16,
        color: '#666',
    },
    currentGoal: {
        marginTop: 20,
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
    },
});
