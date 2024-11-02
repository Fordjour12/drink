import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';

// Set up notification handler for foreground notifications
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export default function App() {
    useEffect(() => {
        // Request notification permissions when the app is first opened
        requestNotificationPermissions();
    }, []);

    // Request permission to show notifications (especially required on iOS)
    async function requestNotificationPermissions() {
        const { status } = await Notifications.getPermissionsAsync();
        if (status !== 'granted') {
            await Notifications.requestPermissionsAsync();
        }
    }

    // Schedule a local notification to repeat every 2 hours
    async function scheduleWaterReminder() {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "💧 Time to Drink Water!",
                body: "Stay hydrated by drinking a glass of water.",
                sound: true,
            },
            trigger: {
                seconds: 2 * 60 * 60, // Trigger every 2 hours
                repeats: true,
            },
        });
    }

    // Set up listeners to respond to received and clicked notifications
    useEffect(() => {
        const notificationListener = Notifications.addNotificationReceivedListener(notification => {
            console.log("Notification received:", notification);
        });

        const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
            console.log("Notification clicked:", response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
            Notifications.removeNotificationSubscription(responseListener);
        };
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>Hydration Reminder App</Text>
            <Button title="Start Water Reminder" onPress={scheduleWaterReminder} />
        </View>
    );
}
