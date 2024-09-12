import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AuthMediaButton = ({ icon, title }) => {
  return (
    <TouchableOpacity
      className={`bg-secondColor px-12 py-3 rounded-xl my-2 flex-row items-center justify-center`}
    >
      <Image source={icon} alt="" />
      <Text
        className={`capitalize text-darkColor font-poppins600 text-sm ml-2`}
      >
        continue with {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AuthMediaButton;
