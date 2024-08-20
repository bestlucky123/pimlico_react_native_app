import {
  View,
  Image,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import TitleAndDesription from 'components/screens/login-screen/title-and-description';
import MailAndPasswordInput from 'components/screens/login-screen/mail-password-input';

import PageStyles from 'components/common/login-signup/style.module';
import LoginOptions from 'components/screens/login-screen/login-options';
import LoginSignupButton from 'components/common/login-signup/login-signup-button';

const Logo = require('assets/images/logo.png');

const SignInScreen = () => {
  const HandleSignIn = () => {
    Alert.alert('Try later');
  };
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Image source={Logo} style={styles.logo} />
        <View style={PageStyles.mainArea}>
          <TitleAndDesription
            title={'Sign In'}
            description={
              'Use your Pimlico Capital portal to manage all of your loans and lending needs!'
            }
          />

          <MailAndPasswordInput />

          <LoginOptions />

          <View style={styles.loginbuttonSctionContainer}>
            <LoginSignupButton label="Sign In" onClick={HandleSignIn} />

            <View style={styles.createAccountContainer}>
              <Text style={styles.createAccountText}>
                New to the Portal?{' '}
              </Text>
              <TouchableOpacity>
                <Text style={PageStyles.underlineLink}>Create an Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383F41',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    height: '100%',
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

export default SignInScreen;
