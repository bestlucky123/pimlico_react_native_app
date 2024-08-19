import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TitleAndDesription from "components/screens/login-screen/title-and-description"
import MailAndPasswordInput from "components/screens/login-screen/mail-password-input";

const Logo = require("assets/images/logo.png");

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        {/* Logo Image */}
        <Image source={Logo} style={styles.logo} />

        <View style={styles.mainArea}>
          <TitleAndDesription
            title={"Sign In"}
            description={
              "Use your Pimlico Capital portal to manage all of your loans and lending needs!"
            }
          />

          <MailAndPasswordInput />

          {/* Remember Me and Forgot Password Row */}
          <View style={styles.optionsRow}>
            <TouchableOpacity style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxLabel}>Remember Me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>

          {/* Create Account Link */}
          <TouchableOpacity>
            <Text style={styles.createAccountText}>
              New to the Portal?{" "}
              <Text style={styles.createAccountLink}>Create an Account</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#383F41", // Dark background color
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    marginTop: 222,
    paddingVertical: 80,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  logo: {
    width: 219,
    height: 209,
    position: "absolute",
    top: -153, // Position the logo partially outside the overlay
  },
  mainArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 32,
  },
  signInText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginTop: 70, // Push down below the logo
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  optionsRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#333",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#007BFF",
  },
  signInButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#28a745",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  signInButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccountText: {
    fontSize: 14,
    color: "#666",
  },
  createAccountLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default SignInScreen;
