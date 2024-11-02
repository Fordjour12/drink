import { router } from "expo-router";
import { Dimensions, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get('window');

const QuickStartScreen = () => {
    return (
        <ImageBackground
            source={require('@/assets/image/get-started-background.jpg')}
            style={styles.container}
        >
            <View style={styles.overlay} />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.bottomContainer}>
                    <View style={styles.card}>
                        <Text style={styles.title}>Sip, Track, Thrive!</Text>
                        <Text style={[styles.text, styles.subtext, { paddingBottom: 6 }]}>Your Hydration Journey Starts Here</Text>
                        <Text style={[styles.text, { fontSize: 14 }]}>
                            Regular water intake supports digestion, skin health, and energy levels. Use our app to stay on top of your hydration goals effortlessly!
                            Water is essential to every part of your body’s health. With consistent hydration, you can improve mood, increase focus, and support your overall well-being.
                        </Text>
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.3)',
                                    marginTop: 20,
                                    padding: 10,
                                    borderRadius: 8,
                                },
                            ]}
                            onPress={() => {
                                router.push("/(tabs)/")
                            }}
                        >
                            <Text style={[styles.text, { fontFamily: "PlayfairExtarBold", fontSize: 24 }]}>Lets go</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    safeArea: {
        flex: 1,
        zIndex: 1,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 5,
    },
    card: {
        borderRadius: 16,
        padding: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slight base color for better blur effect
    },
    title: {
        color: '#FFFFFF', // White text color
        fontSize: 32,
        marginBottom: 10,
        fontFamily: "PlayfairBlack"
    },
    subtext: {
        fontSize: 17,
        fontWeight: "medium"
    },
    text: {
        color: '#FFFFFF', // White text color
        fontFamily: "SourceCode"
    }
});

export default QuickStartScreen;