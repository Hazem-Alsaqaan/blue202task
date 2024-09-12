import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import instaIcon from "./assets/pictures/instagram.png";
import facebookIcon from "./assets/pictures/Facebook.png";
import tiktokIcon from "./assets/pictures/_tiktok.png";
import WelcomeComponent from "./src/components/WelcomeComponent";
import FormAuthentication from "./src/components/FormAuthentication";
import AuthMediaButton from "./src/components/AuthMediaButton";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    poppins500: require("./assets/fonts/Poppins-Medium.ttf"),
    poppins600: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaView className={`flex-1 items-center bg-white py-10`}>
      <View className={`flex-1 w-full px-5`}>
        <WelcomeComponent />
        <FormAuthentication />
        <View className={`flex-row items-center justify-center`}>
          <Text className={`text-textGray`}>ــــــــــــــــــــــــــــ</Text>
          <Text className={`text-textGray font-poppins500 mx-2`}>
            Or use social media
          </Text>
          <Text className={`text-textGray`}>ــــــــــــــــــــــــــــ</Text>
        </View>
        <AuthMediaButton title={"instagram"} icon={instaIcon} />
        <AuthMediaButton title={"facebook"} icon={facebookIcon} />
        <AuthMediaButton title={"tiktok"} icon={tiktokIcon} />
        <View className={`flex-row items-center justify-center mt-6`}>
          <Text className={`text-darkColor font-poppins500 mx-1`}>
            Already have an account?
          </Text>
          <TouchableOpacity>
            <Text className={`text-mainColor font-poppins500`}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
