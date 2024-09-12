import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import ClearIcon from "../../assets/pictures/Clear.png";
import Checkmark from "../../assets/pictures/Checkmark.png";
import EyeIcon from "../../assets/pictures/Eye.png";
import EyeSlashIcon from "../../assets/pictures/Eye-slash.png";
import { useState } from "react";

const ReusableForm = ({
  formIcon,
  formTitle,
  formValue,
  setFormValue,
  isValid,
}) => {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <View
      className={`w-full bg-secondColor p-4 mb-2 rounded-xl border-[1px] border-solid border-[#EEF1F4] focus:border-mainColor flex-row items-center`}
    >
      <Image source={formIcon} alt="" />
      <View className={`flex-1 ml-1`}>
        <TextInput
          placeholder={formTitle}
          secureTextEntry={formTitle === "Password" ? isSecure : false}
          value={formValue}
          onChangeText={(e) => setFormValue(e)}
          returnKeyType="go"
          returnKeyLabel="go"
          keyboardAppearance="light"
        />
      </View>
      <TouchableOpacity onPress={() => setFormValue("")} disabled={isValid}>
        {isValid ? (
          <Image source={Checkmark} alt="" />
        ) : formValue ? (
          <Image source={ClearIcon} alt="" />
        ) : null}
      </TouchableOpacity>
      {formTitle === "Password" && (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          {isSecure ? (
            <Image source={EyeIcon} alt="" />
          ) : (
            <Image source={EyeSlashIcon} alt="" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ReusableForm;
