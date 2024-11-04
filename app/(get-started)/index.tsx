import { router } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function index() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ alignItems: 'center' }}>
                <Text>Get Started With Drink</Text>
                <Text>Drink is a simple app that helps you track your daily water intake.</Text>
                <Button title="Get Started" onPress={() => router.push("/(get-started)/(auth)")} />
                <Button title="Congratulations" onPress={() => router.push("/(get-started)/(auth)/congrats")} />
            </View>
        </SafeAreaView>
    )
}