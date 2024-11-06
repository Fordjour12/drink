import type React from "react";
import { useEffect, useMemo, useRef } from "react";
import {
    Animated,
    StyleSheet,
    Text,
    View
} from "react-native";

interface WaterIntakeProps {
    intakeGoal: number;
    totalIntake: number;
}

const Hx: React.FC<WaterIntakeProps> = ({ intakeGoal, totalIntake }) => {
    const progress = useMemo(
        () => (intakeGoal > 0 ? Math.min(totalIntake / intakeGoal, 1) : 0),
        [totalIntake, intakeGoal]
    );
    const animatedHeight = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedHeight, {
            toValue: progress * 100,
            duration: 1000,
            useNativeDriver: false
        }).start();

        return () => {
            animatedHeight.stopAnimation();
        };
    }, [progress, animatedHeight]);

    const progressBarAccessibility = `Water intake progress: ${Math.round(progress * 100)}%`;
    const intakeText = `Current water intake: ${totalIntake} ml`;
    const goalText = `Goal: ${intakeGoal} ml`;

    return (
        <View style={styles.container}>
            <Text style={styles.text} accessibilityLabel={intakeText}>
                {intakeText}
            </Text>
            <View
                style={styles.progressBar}
                accessibilityLabel={progressBarAccessibility}
            >
                <Animated.View
                    style={[
                        styles.progress,
                        {
                            height: animatedHeight.interpolate({
                                inputRange: [0, 100],
                                outputRange: ["0%", "100%"]
                            }),
                            backgroundColor: progress >= 1 ? "#4CAF50" : "#76c7c0"
                        }
                    ]}
                />
            </View>
            <Text style={styles.text} accessibilityLabel={goalText}>
                {goalText}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    },
    text: {
        fontSize: 18,
        margin: 10,
        fontWeight: "500"
    },
    progressBar: {
        width: "80%",
        height: 200,
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
        overflow: "hidden",
        justifyContent: "flex-end",
        borderWidth: 1,
        borderColor: "#ccc"
    },
    progress: {
        width: "100%",
        backgroundColor: "#76c7c0"
    }
});

export default Hx
