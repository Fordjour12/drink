import FemaleAsset from "@/assets/image/female-avatar-svg";
import MaleAsset from "@/assets/image/male-avatar-svg";
import React, { Fragment, useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function gender() {
    const [selectedGender, setSelectedGender] = useState<string | null>(null);

    useEffect(() => {
        const loadGender = async () => {
            const savedGender = await AsyncStorage.getItem('selectedGender');
            if (savedGender) {
                setSelectedGender(savedGender);
            }
        };
        loadGender();
    }, []);

    const handleGenderSelect = async (gender: string) => {
        setSelectedGender(gender);
        await AsyncStorage.setItem('selectedGender', gender);
    };

    return (
        <Fragment>
            <View style={{ paddingTop: 20 }}>
                <Text style={styles.title}>What's your gender?</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.genderContainer}>
                    <TouchableOpacity
                        style={[
                            styles.genderOption,
                            selectedGender === "female" && styles.selectedGender,
                        ]}
                        onPress={() => handleGenderSelect("female")}
                    >
                        <FemaleAsset />
                        <Text style={styles.genderText}>Female</Text>
                    </TouchableOpacity>
                    <View style={{ margin: 30 }} />
                    <TouchableOpacity
                        style={[
                            styles.genderOption,
                            selectedGender === "male" && styles.selectedGender,
                        ]}
                        onPress={() => handleGenderSelect("male")}
                    >
                        <MaleAsset />
                        <Text style={styles.genderText}>Male</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    genderContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    genderOption: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "transparent",
    },
    selectedGender: {
        borderColor: "#007AFF",
    },
    genderText: {
        marginTop: 10,
        fontSize: 18,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
    },
    buttonText: {
        color: "white",
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "black",
    },
});