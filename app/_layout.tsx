import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "react-native";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		Playfair: require("@/assets/fonts/Playfair_144pt-Regular.ttf"),
		PlayfairExtarBold: require("@/assets/fonts/Playfair_144pt-ExtraBold.ttf"),
		PlayfairBlack: require("@/assets/fonts/Playfair_144pt-Black.ttf"),
		PlayfairVW: require("@/assets/fonts/Playfair-VariableFont_wght.ttf"),
		SourceCode: require("@/assets/fonts/SourceCodePro-Regular.ttf"),
		SourceCodeVW: require("@/assets/fonts/SourceCodePro-VariableFont_wght.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
			</Stack>
		</ThemeProvider>
	);
}