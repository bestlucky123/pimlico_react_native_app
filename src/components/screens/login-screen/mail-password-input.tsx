import { TextInput, View, StyleSheet } from "react-native";
import LoginSignUpContainer from "components/common/login-signup/login-signup-container";
import MailInputField from "components/common/login-signup/mail-input-filed";

const MailAndPasswordInput = () => {
  return (
    <LoginSignUpContainer>
      <MailInputField />
    </LoginSignUpContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 16,
  },
  input: {

  },
});

export default MailAndPasswordInput;
