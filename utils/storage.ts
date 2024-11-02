import AsyncStorage from '@react-native-async-storage/async-storage';

const INTAKE_KEY_PREFIX = 'water_intake_';

export const getDailyIntake = async (date: string): Promise<number> => {
  try {
    const value = await AsyncStorage.getItem(INTAKE_KEY_PREFIX + date);
    return value ? Number.parseInt(value, 10) : 0;
  } catch (error) {
    console.error('Error reading daily intake:', error);
    return 0;
  }
};

export const setDailyIntake = async (date: string, amount: number): Promise<void> => {
  try {
    await AsyncStorage.setItem(INTAKE_KEY_PREFIX + date, amount.toString());
  } catch (error) {
    console.error('Error saving daily intake:', error);
  }
};
