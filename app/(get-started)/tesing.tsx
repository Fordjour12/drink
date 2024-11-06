
import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const DiscoverNewDestinations = () => {
    const navigation = useRouter();

    return (
        <ImageBackground
            source={require('@/assets/image/waterfall-forest.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                {/* Text Overlay */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Sip, Track, Thrive!</Text>
                    <Text style={styles.subtitle}>Your Hydration Journey Starts Here</Text>
                    <Text style={styles.subtitle}>
                        Regular water intake supports digestion, skin health, and energy levels. Use our app to stay on top of your hydration goals effortlessly!
                        Water is essential to every part of your body’s health. With consistent hydration, you can improve mood, increase focus, and support your overall well-being.
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'flex-end',
        padding: 20,
    },
    textContainer: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },

});

export default DiscoverNewDestinations;
