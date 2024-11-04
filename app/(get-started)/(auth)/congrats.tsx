import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import type React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming
} from "react-native-reanimated";
import Svg, { Path, RadialGradient, Stop } from "react-native-svg";

interface CustomButtonProps {
    title: string;
    onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

export default function congrats() {
    const [userName, setUserName] = useState("");
    const [showConfetti, setShowConfetti] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showUserName, setShowUserName] = useState(false);

    const textTranslateY = useSharedValue(100);
    const buttonOpacity = useSharedValue(0);

    useEffect(() => {
        const fetchUserName = async () => {
            const name = await AsyncStorage.getItem("userName");
            if (name) {
                setUserName(name);
            }
            setShowConfetti(true); // Trigger confetti as soon as the username is fetched
        };
        fetchUserName();
    }, []);

    useEffect(() => {
        if (showButton) {
            textTranslateY.value = withTiming(0, { duration: 500 });
            buttonOpacity.value = withDelay(500, withTiming(1, { duration: 500 }));
            setTimeout(() => setShowUserName(true), 500); // Delay showing the username
        }
    }, [showButton, textTranslateY, buttonOpacity]);

    const animatedTextStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: textTranslateY.value }]
        };
    });

    const animatedButtonStyle = useAnimatedStyle(() => {
        return {
            opacity: buttonOpacity.value
        };
    });

    return (
        <View style={styles.container}>
            <Svg style={styles.icon} aria-hidden={true} viewBox="0 0 128 128">
                <Path
                    fill="#ffc107"
                    d="M60.99 15.4a4.336 4.336 0 0 1-.1 5.21C57.56 24.87 50.5 33.4 43.48 38.58c-8.66 6.4-16.55 9.27-20.57 10.44-1.78.52-3.68-.17-4.75-1.68-2.64-3.71-6.84-11.66-5.19-22.91C15.3 8.43 33.63.71 45.51 4.55S60.99 15.4 60.99 15.4z"
                />
                <RadialGradient
                    id="a"
                    cx={39.662}
                    cy={33.066}
                    r={15.102}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.376} stopColor="#af5700" />
                    <Stop offset={1} stopColor="#8f4700" />
                </RadialGradient>
                <Path
                    fill="url(#a)"
                    d="M24.5 46.03c-1.17.49-2.23-.88-1.48-1.89 2.2-2.94 6.47-7.76 14.26-14.04 8.45-6.81 14.44-9.22 17.71-10.07 1.13-.29 2 .98 1.32 1.93-2.21 3.1-6.86 8.76-14.47 14.19-7.38 5.27-13.64 8.32-17.34 9.88z"
                />
                <Path
                    fill="#ffee58"
                    d="M32.73 8.74c.46 1.98 2.96 2.67 5.38 2.26 2.62-.44 5.92-.81 5.61-3.47-.32-2.75-4.7-2.64-6.32-2.55-2.37.14-5.08 2.01-4.67 3.76z"
                />
                <Path
                    fill="#ffc107"
                    d="M84.25 3.72c11.96-3.22 29.52.9 33.04 21.62 1.34 7.87-1.79 14.84-3.98 18.56-1.08 1.84-3.19 2.82-5.28 2.4-4.08-.82-11.68-3.11-21.86-9.47-5.66-3.53-13.36-10.41-17.72-14.46-1.97-1.83-2.16-4.9-.39-6.93 3.46-3.97 9.55-9.93 16.19-11.72z"
                />
                <RadialGradient
                    id="b"
                    cx={90.501}
                    cy={31.97}
                    r={21.224}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.376} stopColor="#af5700" />
                    <Stop offset={1} stopColor="#8f4700" />
                </RadialGradient>
                <Path
                    fill="url(#b)"
                    d="M73.42 22.5c-.63-.63-.03-1.69.84-1.47 3.82.96 10.87 3.11 17.13 7.02 6.42 4.02 12.91 10.13 16.2 13.4.65.64.01 1.72-.87 1.46-4.02-1.17-11.41-3.77-18.72-8.7-7.43-5.01-12.16-9.3-14.58-11.71z"
                />
                <Path
                    fill="#ffee58"
                    d="M83.59 11.84c-3.95 1.24-5.06-1.55-2.95-3.67 1.52-1.53 7.93-4.26 13.49-3.1 3.67.77 4.82 6.06-.35 5.99-3.52-.05-5.35-.74-10.19.78z"
                />
                <Path
                    fill="#03a9f4"
                    d="M110.02 120.05c-12.45-7.83-20.79-23.08-22.31-40.8-1.37-16.01 2.51-32.22 5.63-45.24l6.4 2.91c-2.98 12.46-5.32 26.92-4.06 41.64 1.3 15.23 8.26 28.21 18.6 34.71l-4.26 6.78zM60.58 117.29l-3.3-7.29c3.91-1.77 6.17-6.9 4.83-10.97-.65-1.99-2.05-3.89-3.52-5.9-1.2-1.64-2.45-3.34-3.47-5.29-2.66-5.1-3.29-11.2-1.71-16.73.8-2.79 2.07-5.26 3.31-7.65 1.4-2.7 2.71-5.24 3.05-7.8.31-2.37-.25-4.88-1.55-6.89-1.18-1.81-3-3.37-4.93-5.01-1.46-1.25-2.98-2.54-4.37-4.06-3.29-3.6-4.57-7.89-4.55-12.68l5.57-2.11s1.01 5.44 2.37 7.61c1.43 2.27 3.56 3.81 5.58 5.53 2.28 1.95 5.23 3.58 7.04 6.38 2.32 3.58 3.33 8.06 2.77 12.3-.52 3.94-2.23 7.24-3.88 10.43-1.1 2.13-2.14 4.14-2.72 6.17-1.02 3.58-.62 7.53 1.11 10.83.74 1.42 1.75 2.8 2.83 4.27 1.78 2.43 3.62 4.93 4.67 8.13 2.63 7.95-1.47 17.27-9.13 20.73z"
                />
                <Path
                    fill="#f48fb1"
                    d="m10.51 123.31-4.73-6.45C36.11 94.64 39.34 62.1 37.2 45.52l6.04-1.85c2.37 18.33.91 55-32.73 79.64z"
                />
                <Path
                    fill="#0076c6"
                    d="m94.92 73.36.53.41c-.06-3.29.1-6.6.41-9.88-2.68-2.23-5.18-4.62-6.98-7.42-.05-.08-.09-.16-.14-.24-.54 3.6-.96 7.28-1.16 10.99 2.39 2.29 4.95 4.29 7.34 6.14z"
                />
                <Path
                    fill="#f44336"
                    d="m114.93 95.35-7.26-3.37c1.85-3.98.3-8.79-1.76-11.96-2.68-4.12-6.9-7.4-10.99-10.57-4.39-3.4-9.36-7.25-12.78-12.58-6.29-9.79-5.18-21.98 1.91-31.21l5.81 3.25c-5.1 6.65-5.51 16.58-.99 23.63 2.67 4.17 6.88 7.42 10.95 10.58 4.4 3.41 9.38 7.27 12.8 12.53 4.12 6.35 5.01 13.9 2.31 19.7zM8.99 92.59c-1.5-8.48 4.7-12.87 8.03-15.23.4-.28.89-.63 1.23-.9-.03-.71-.51-1.6-1.41-3.11-1.48-2.49-3.5-5.91-1.95-10.26 1.35-3.78 5.27-5.03 7.87-6.49 2.22-1.25 3.83-2.77 4.63-5.31.93-2.96.28-10.4.28-10.4l4.88-2.85s1.54 7.11 1.54 10.73C34.09 59.03 28.4 61.65 26 63c-1.66.93-3.23 1.81-3.57 2.77-.25.7.1 1.49 1.3 3.51 1.44 2.42 3.4 5.75 2.12 10-.62 2.07-2.36 3.31-4.2 4.61-3.26 2.31-5.36 4.07-4.78 7.31l-7.88 1.39zM75.05 82.26c-3.56-.85-5.99-2.97-8.17-4.77l5.1-6.17s1.81 2.69 5.78 3.93l-2.71 7.01zM68.63 37.24l-5.91-3.47L67 27l5.92 3.47zM83.97 113.56 76 108.61l6.15-6.84 6.15 5.84z"
                />
                <Path
                    fill="#fb8c00"
                    d="m109.207 60.167 4.69-6.481 6.96 5.036-4.691 6.481z"
                />
                <Path fill="#f44336" d="m52.89 57.06-7.06-4.88 3.67-4.87 7.05 4.88z" />
                <Path
                    fill="#0076c6"
                    d="M61.43 65.59s1.36-.05 3.05.28c1.22-2.4 2.38-4.9 2.98-7.71-2.08-.47-3.75-.24-3.75-.24l-2.28 7.67z"
                />
                <Path
                    fill="#fb8c00"
                    d="M70.92 66.53c-2.79-2.38-7.45-2.21-7.45-2.21l2.27-7.67s5.16-.72 8.64 2.91l-3.46 6.97zM4.641 98.305l7.256-.443.487 7.985-7.256.443zM43.17 96.91l-4.61-6.54c2.04-1.44 3.91-3.15 5.53-5.06l6.1 5.18a38.155 38.155 0 0 1-7.02 6.42z"
                />
                <Path
                    fill="#f44336"
                    d="M43.23 115.39c-2.4-1.98-4.94-3.82-7.56-5.48l4.28-6.76c2.9 1.83 5.71 3.87 8.37 6.06l-5.09 6.18z"
                />
                <Path
                    fill="#0076c6"
                    d="M87.85 80.09c.28 3.31.67 5.69 1.41 8.79l5.27-4.23-5.13-6.41-1.55 1.85z"
                />
                <Path
                    fill="#ffc107"
                    d="m79.37 85.194 8.06-6.461 5.004 6.241-8.06 6.462z"
                />
                <Path
                    fill="#fb8c00"
                    d="M76.62 125.26c-1.4-2.57-2.97-5.08-4.67-7.46l6.51-4.65a78.74 78.74 0 0 1 5.18 8.29l-7.02 3.82z"
                />
            </Svg>

            <Animated.View style={animatedTextStyle}>
                <Text style={styles.title}>Congratulations!</Text>
                <Text style={styles.subtitle}>You have successfully registered,</Text>
                {showUserName && <Text style={styles.userName}>{userName}</Text>}
            </Animated.View>
            {showConfetti && (
                <ConfettiCannon
                    count={200}
                    origin={{ x: -10, y: 0 }}
                    onAnimationEnd={() => setShowButton(true)}
                />
            )}
            {showButton && (
                <Animated.View style={animatedButtonStyle}>
                    <CustomButton
                        title="Continue"
                        onPress={() => {
                            router.push("/")
                        }}
                    />
                </Animated.View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4f8",
        padding: 20
    },
    icon: {
        width: "60%",
        height: "60%",
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
        textAlign: "center"
    },
    subtitle: {
        fontSize: 18,
        color: "#666",
        marginBottom: 5,
        textAlign: "center"
    },
    userName: {
        fontSize: 40,
        color: "#007AFF",
        fontFamily: "Playfair900",
        fontWeight: "black",
        textAlign: "center"
    },
    button: {
        backgroundColor: "#007AFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
});
