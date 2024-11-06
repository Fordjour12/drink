import { Stack } from 'expo-router'
import React from 'react'

export default function SetupLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="gender" options={{ headerShown: false }} />
            <Stack.Screen name="notfications" options={{ headerShown: false }} />
        </Stack>

    )
}