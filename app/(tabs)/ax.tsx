import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const WaterWaveAnimation = ({ percentage = 70, waveColor = '#4F9DED' }) => {
    // Create animated values for wave animation
    const animation1 = useRef(new Animated.Value(0)).current;
    const animation2 = useRef(new Animated.Value(0)).current;

    // Convert percentage to actual height
    const waterLevel = (100 - percentage) * 3;

    useEffect(() => {
        // Create infinite wave animation
        const createAnimation = (animation, delay) => {
            return Animated.sequence([
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 7000,
                    delay,
                    useNativeDriver: true,
                }),
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 7000,
                    delay: 0,
                    useNativeDriver: true,
                }),
            ]);
        };

        // Run both animations in parallel with different delays
        Animated.parallel([
            Animated.loop(createAnimation(animation1, 0)),
            Animated.loop(createAnimation(animation2, 3500)),
        ]).start();
    }, []);

    const AnimatedPath = Animated.createAnimatedComponent(Path);

    const translateX1 = animation1.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -screenWidth],
    });

    const translateX2 = animation2.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -screenWidth],
    });

    const createWavePath = () => {
        const width = screenWidth;
        const height = 20;
        return `
      M 0 ${height}
      Q ${width * 0.25} ${height * 0.3}
        ${width * 0.5} ${height}
      T ${width} ${height}
      V ${height * 2}
      H 0
      Z
    `;
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#1E215C', '#3A42A0']}
                style={StyleSheet.absoluteFillObject}
            />

            <View style={[styles.waterContainer, { bottom: waterLevel }]}>
                <Svg width={screenWidth * 2} height={100}>
                    <AnimatedPath
                        d={createWavePath()}
                        fill={waveColor}
                        opacity={0.5}
                        transform={[{ translateX: translateX1 }]}
                    />
                    <AnimatedPath
                        d={createWavePath()}
                        fill={waveColor}
                        opacity={0.5}
                        transform={[{ translateX: translateX2 }]}
                    />
                </Svg>
            </View>

            <View style={styles.percentageContainer}>
                <Text style={styles.percentageText}>{percentage}%</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
    },
    waterContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    percentageContainer: {
        position: 'absolute',
        top: '20%',
        width: '100%',
        alignItems: 'center',
    },
    percentageText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default WaterWaveAnimation;