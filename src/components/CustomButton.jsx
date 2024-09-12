import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({ handleSubmit, isDisabled }) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      className={` py-4 px-14 rounded-xl my-[10px]  ${
        isDisabled
          ? "bg-btnGray border-[1px] border-solid border-[#EFEFEF]"
          : "bg-mainColor border-none"
      }   `}
      onPress={() => handleSubmit()}
    >
      <Text
        className={`${
          isDisabled ? "text-textGray" : "text-white"
        } text-center font-poppins600 `}
      >
        Sign in
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
