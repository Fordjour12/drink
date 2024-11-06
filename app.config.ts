import type { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
	const isDevelopment = String(process.env.APP_ENV) === "development";

	return {
		...config,
		name: isDevelopment ? "drink-dev" : "drink",
		slug: isDevelopment ? "drink-dev" : "drink",
		scheme: "my-app-drink",
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/icon.png",
		userInterfaceStyle: "light",
		splash: {
			image: "./assets/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff"
		},
		ios: {
			supportsTablet: true,
			runtimeVersion: {
				policy: "appVersion"
			}
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-icon.png",
				backgroundColor: "#ffffff"
			},
			package: isDevelopment
				? "com.thedevelophantom.drink.dev"
				: "com.thedevelophantom.drink",
			runtimeVersion: "1.0.0"
		},
		web: {
			favicon: "./assets/favicon.png"
		},
		plugins: [
			"expo-router",
			[
				"expo-notifications",
				{
					color: "#ffffff",
					defaultChannel: "default"
				}
			],
			[
				"expo-dev-launcher",
				{
					launchMode: "most-recent"
				}
			]
		],
		experiments: {
			typedRoutes: true
		},
		extra: {
			router: {
				origin: false
			},
			eas: {
				projectId: "ec8f74e9-5de1-41c8-9e3d-a76a9f57189d"
			}
		},
		owner: "thedevelophantom",
		updates: {
			url: "https://u.expo.dev/ec8f74e9-5de1-41c8-9e3d-a76a9f57189d"
		}
	};
};
