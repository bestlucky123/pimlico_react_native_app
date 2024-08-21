import {
  View,
  Image,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import SignupOptionAndInfoSection from 'components/screens/signup-screen/signup-info-section';
import PageStyles from 'components/common/login-signup/style.module';
import LoginOptions from 'components/screens/login-screen/login-options';
import LoginSignupButton from 'components/common/login-signup/login-signup-button';
import {useState} from 'react';

const Logo = require('assets/images/logo.png');

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleSSOWithGoogle = () => {
    Alert.alert('SSO with Google');
  };

  const handleSignUpWithEmail = () => {
    Alert.alert('Form submitted');
  };

  const validateForm = (
    email: string,
    password: string,
    confirmPassword: string,
  ) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (
      emailRegex.test(email) &&
      passwordRegex.test(password) &&
      password === confirmPassword
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
    }
    validateForm(email, password, confirmPassword);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.overlay}>
          <Image source={Logo} style={styles.logo} />
          <View style={PageStyles.mainArea}>
            <View style={styles.titleAndDescription}>
              <Text style={styles.title}>Create an Account</Text>

              <Text style={styles.description}>
                Use your Pimlico Capital portal to manage all of your loans and
                lending needs!
              </Text>
            </View>

            <SignupOptionAndInfoSection
              handleSSOWithGoogle={handleSSOWithGoogle}
              handleInputChange={handleInputChange}
              email={email}
              password={password}
              confirmPassword={confirmPassword}
            />

            <View style={styles.loginbuttonSctionContainer}>
              <LoginSignupButton
                label="Get Started"
                disabled={isValid}
                onClick={handleSignUpWithEmail}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#383F41',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    marginTop: 222,
    paddingVertical: 80,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  logo: {
    width: 219,
    height: 209,
    position: 'absolute',
    top: -153,
  },
  titleAndDescription: {
    width: '100%',
    gap: 8,
    alignItems: 'center',
    letterSpacing: -0.2,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: '#383535',
  },
  description: {
    fontSize: 14,
    color: '#383F41',
    textAlign: 'center',
  },
  descriptionInlineLinkText: {
    color: '#3399FF',
  },
  loginbuttonSctionContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
  createAccountContainer: {
    flexDirection: 'row',
  },
  createAccountText: {
    fontSize: 14,
    color: '#383F41',
  },
  createAccountLink: {
    fontSize: 14,
    color: '#3399FF',
  },
});

export default SignUpScreen;
