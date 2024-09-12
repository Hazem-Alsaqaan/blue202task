import { Image, Text, TouchableOpacity, View } from "react-native";
import arrow_back from "../../assets/pictures/arrow_back.png";

const WelcomeComponent = () => {
  return (
    <View className={`w-full`}>
      <TouchableOpacity className={`py-2`}>
        <Image source={arrow_back} alt="" className={`w-12 h-12`} />
      </TouchableOpacity>
      <View className={`flex items-center justify-center`}>
        <Text className={`capitalize text-2xl font-poppins600 text-darkColor`}>
          Hello Again 👋{" "}
        </Text>
        <Text className={`text-sm font-poppins500 text-textGray my-1`}>
          Welcome back, you’ve been missed
        </Text>
      </View>
    </View>
  );
};

export default WelcomeComponent;
