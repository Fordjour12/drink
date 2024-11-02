import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function StackLayout() {
    const colorScheme = useColorScheme();

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
                },
                headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Home',
                }}
            />
            <Stack.Screen
                name='intake'
                options={{
                    title: "Water Intake"
                }}
            />
            <Stack.Screen
                name='add-intake'
                options={{
                    title: "Add Intake"
                }}
            />
            <Stack.Screen
                name='ast'
                options={{
                    title: "Settings"
                }}
            />
            <Stack.Screen
                name='local'
                options={{
                    title: "Local Notifications"
                }}
            />
            <Stack.Screen
                name='history'
                options={{
                    title: "History"
                }}
            />
        </Stack>
    );
}
