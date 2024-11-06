import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NotificationsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stay Hydrated</Text>
            <Text style={styles.description}>
                Receive reminders to drink water and stay on track with your hydration goals throughout the day.
            </Text>
            <Image source={require("@/assets/icon.png")} style={styles.illustration} />
            <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Enable Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Skip</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 34,
        marginBottom: 10,
        color: '#000000',
        fontFamily: "Playfair900"
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#555555',
    },
    illustration: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    primaryButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 10,
        width: '80%',
        alignItems: 'center',
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    secondaryButton: {
        paddingVertical: 10,
    },
    secondaryButtonText: {
        color: '#007BFF',
        fontSize: 14,
    },
});

export default NotificationsScreen;
