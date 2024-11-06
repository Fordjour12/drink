import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [intakeGoal, setIntakeGoal] = React.useState(0);
  const [totalIntake, setTotalIntake] = React.useState(0);

  useEffect(() => {

    loadStoredData();
  }, []);

  const loadStoredData = async () => {
    try {
      const storedGoal = await AsyncStorage.getItem('@water_intake_goal');
      const storedIntake = await AsyncStorage.getItem('@water_intake_total');
      if (storedGoal) {
        setIntakeGoal(Number(storedGoal));
      }
      if (storedIntake) {
        setTotalIntake(Number(storedIntake));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };



  const progress = totalIntake / intakeGoal;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current water intake: {totalIntake} ml</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress * 100}%` }]} />
      </View>
      <Text style={styles.text}>Goal: {intakeGoal} ml</Text>
      <Link href={"/(tabs)/intake"} asChild>
        <Text style={styles.link}>Go to intake</Text>
      </Link>
      <Link href={"/(tabs)/add-intake"} asChild>
        <Text style={styles.link}>Add water intake</Text>
      </Link>
      <Link href={"/(tabs)/ast"} asChild>
        <Text style={styles.link}>Settings</Text>
      </Link>
      <Link href={"/(tabs)/local"} asChild>
        <Text style={styles.link}>Local Notifications</Text>
      </Link>
      <Link href={"/(tabs)/history"} asChild>
        <Text style={styles.link}>History</Text>
      </Link>
      <Link href={"/(tabs)/ax"} asChild>
        <Text style={styles.link}>Ax</Text>
      </Link>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: 'blue',
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#76c7c0',
  },
});