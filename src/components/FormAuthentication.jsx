import { Button, Text, TouchableOpacity, View } from "react-native";
import MailIcon from "../../assets/pictures/sms.png";
import passwordIcon from "../../assets/pictures/Password.png";
import { useState } from "react";
import ReusableForm from "./ReusableForm";
import CustomButton from "./CustomButton";

const FormAuthentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let isEmailValid = email.includes("@");
  let isDisabled = !isEmailValid || (password.length < 1 ? true : false);
  const handleSubmit = () => {
    console.log("you signed in");
    setEmail("");
    setPassword("");
  };
  return (
    <View className={`w-full my-4`}>
      <View className={`mb-2`}>
        <ReusableForm
          formIcon={MailIcon}
          formTitle={"Email"}
          formValue={email}
          setFormValue={setEmail}
          isValid={isEmailValid}
        />
        <ReusableForm
          formIcon={passwordIcon}
          formTitle={"Password"}
          formValue={password}
          setFormValue={setPassword}
        />
      </View>
      <TouchableOpacity className={`flex items-end`}>
        <Text className={`text-mainColor font-poppins500 text-sm`}>
          Forgot Password ?
        </Text>
      </TouchableOpacity>
      <CustomButton handleSubmit={handleSubmit} isDisabled={isDisabled} />
    </View>
  );
};

export default FormAuthentication;
