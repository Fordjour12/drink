import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WaterIntakeGoal = () => {
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
      <Text style={styles.current}>Current Goal: {intakeGoal}ml</Text>
      <Text style={styles.current}>
        Current Goal in Liters: {(Number(intakeGoal) / 1000).toFixed(2)}L
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  current: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});

export default WaterIntakeGoal;