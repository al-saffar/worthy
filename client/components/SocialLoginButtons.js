import React from "react";
import CustomButton from "./CustomButton";

export default function SocialLoginButtons() {
  function onPressFacebook() {
    console.warn("Login with Facebook is pressed");
  }

  function onPressGoogle() {
    console.warn("Login with Google is pressed");
  }

  function onPressApple() {
    console.warn("Login with Apple is pressed");
  }

  return (
    <>
      <CustomButton
        onPress={onPressFacebook}
        text="Login with Facebook"
        type="SECONDARY"
        txtColor="#4765A9"
        bgColor="#E7EAF4"
      />
      <CustomButton
        onPress={onPressGoogle}
        text="Login with Google"
        type="SECONDARY"
        txtColor="#DD4D44"
        bgColor="#FAE9EA"
      />
      <CustomButton
        onPress={onPressApple}
        text="Login with Apple"
        type="SECONDARY"
        txtColor="#363636"
        bgColor="#e3e3e3"
      />
    </>
  );
}
