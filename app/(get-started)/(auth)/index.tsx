import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
import { ArrowUpRight } from "lucide-react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

type DebounceFunction = (...args: unknown[]) => void;

const debounce = (
    func: (...args: unknown[]) => void,
    delay: number
): DebounceFunction => {
    let timeoutId: NodeJS.Timeout | null;
    return (...args: unknown[]) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

export default function index() {
    const [name, setName] = useState("");
    const [isNameTyped, setIsNameTyped] = useState(false);
    const router = useRouter();

    const saveNameToStorage = async (name: string) => {
        try {
            await AsyncStorage.setItem('userName', name);
            router.push("/(get-started)/(auth)/congrats"); // Navigate to the congrats screen
        } catch (error) {
            console.error('Failed to save the name to storage', error);
        }
    };

    const handleNameChange = (text: string) => {
        setName(text);
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    const checkNameTyped = useCallback(
        debounce(() => {
            setIsNameTyped(name.length > 0);
        }, 1000),
        [name]
    );

    useEffect(() => {
        checkNameTyped();
    }, [checkNameTyped]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.welcomeText}>
                    Welcome to Drink!
                </Text>
                <Text style={[styles.text, { textAlign: "right" }]}>
                    We help you track your water intake. Enter your name
                    to sign up.
                </Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={handleNameChange}
            />
            <Text style={styles.text}>{name}</Text>
            {isNameTyped && (
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => saveNameToStorage(name)}
                >
                    <Text style={styles.buttonText}>Let's go</Text>
                    <ArrowUpRight color="white" size={20} />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    welcomeText: {
        fontSize: 32, // Increased font size for better emphasis
        marginBottom: 10,
        color: "#333",
        fontFamily: "Playfair900"
    },
    input: {
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginVertical: 20,
        width: "100%",
        backgroundColor: "#f9f9f9"
    },
    text: {
        fontSize: 16, // Reduced font size for better visual hierarchy
        textAlign: "center",
        padding: 16
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        marginRight: 10
    }
})
