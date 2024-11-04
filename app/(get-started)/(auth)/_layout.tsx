import { Stack } from "expo-router";
import type React from "react";

const AuthLayout: React.FC = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Enter your name" }} />
            <Stack.Screen name="congrats" options={{ title: "Congrats" }} />
        </Stack>
    );
};

export default AuthLayout;
