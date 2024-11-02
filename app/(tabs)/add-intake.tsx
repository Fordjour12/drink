import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const WaterIntakeTracker = () => {
  const [intakeGoal, setIntakeGoal] = useState('2000');
  const [inputValue, setInputValue] = useState('');
  const [totalIntake, setTotalIntake] = useState(0);
  const STORAGE_KEY_GOAL = '@water_intake_goal';
  const STORAGE_KEY_INTAKE = '@water_intake_total';
  const STORAGE_KEY_LOGS = '@water_intake_logs';

  useEffect(() => {
    loadStoredData();
    requestNotificationPermissions();
    scheduleWaterReminder();
    resetIntakeAtMidnight();
  }, []);

  const loadStoredData = async () => {
    try {
      const storedGoal = await AsyncStorage.getItem(STORAGE_KEY_GOAL);
      const storedIntake = await AsyncStorage.getItem(STORAGE_KEY_INTAKE);
      if (storedGoal) {
        setIntakeGoal(storedGoal);
      }
      if (storedIntake) {
        setTotalIntake(Number(storedIntake));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const requestNotificationPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('You need to enable notifications to receive water reminders.');
    }
  };

  const scheduleWaterReminder = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync(); // Clear existing notifications
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Time to Drink Water!",
        body: "Stay hydrated by drinking a glass of water.",
      },
      trigger: {
        seconds: 15 * 60, // Trigger every 15mins for testing
        repeats: true,
      },
    });
  };

  const resetIntakeAtMidnight = () => {
    const now = new Date();
    const millisTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0).getTime() - now.getTime();
    setTimeout(async () => {
      await AsyncStorage.setItem(STORAGE_KEY_INTAKE, '0');
      setTotalIntake(0);
      resetIntakeAtMidnight(); // Schedule the next reset
    }, millisTillMidnight);
  };

  const handleAddIntake = async () => {
    const numValue = Number.parseInt(inputValue);
    if (numValue > 0) {
      const newTotalIntake = totalIntake + numValue;
      setTotalIntake(newTotalIntake);
      setInputValue('');
      try {
        await AsyncStorage.setItem(STORAGE_KEY_INTAKE, newTotalIntake.toString());
        const storedLogs = await AsyncStorage.getItem(STORAGE_KEY_LOGS);
        const logs = storedLogs ? JSON.parse(storedLogs) : [];
        logs.push({ amount: numValue, timestamp: new Date().toISOString() });
        await AsyncStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(logs));
      } catch (error) {
        console.error('Error saving water intake:', error);
      }
    }
  };

  const handleQuickAdd = async (amount: number) => {
    const newTotalIntake = totalIntake + amount;
    setTotalIntake(newTotalIntake);
    try {
      await AsyncStorage.setItem(STORAGE_KEY_INTAKE, newTotalIntake.toString());
      const storedLogs = await AsyncStorage.getItem(STORAGE_KEY_LOGS);
      const logs = storedLogs ? JSON.parse(storedLogs) : [];
      logs.push({ amount, timestamp: new Date().toISOString() });
      await AsyncStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(logs));
    } catch (error) {
      console.error('Error saving water intake:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Set Daily Water Intake Goal (ml)</Text>
      <Text style={styles.goal}>Current Goal: {intakeGoal} ml</Text>

      <View style={styles.quickAddContainer}>
        <TouchableOpacity style={styles.quickAddButton} onPress={() => handleQuickAdd(250)}>
          <Text style={styles.buttonText}>250ml</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAddButton} onPress={() => handleQuickAdd(500)}>
          <Text style={styles.buttonText}>500ml</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAddButton} onPress={() => handleQuickAdd(750)}>
          <Text style={styles.buttonText}>750ml</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Add Custom Water Intake (ml)</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="numeric"
        maxLength={4}
        placeholder="Enter amount"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddIntake}>
        <Text style={styles.buttonText}>Add Intake</Text>
      </TouchableOpacity>
      <Text style={styles.total}>Total Intake Today: {totalIntake} ml</Text>
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
  goal: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  total: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
  quickAddContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickAddButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
});

export default WaterIntakeTracker;


