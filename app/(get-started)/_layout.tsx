import { Stack } from 'expo-router'
import React from 'react'

export default function GetStartedLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name='(set-up)' options={{ headerShown: false }} />
        </Stack>
    )
}