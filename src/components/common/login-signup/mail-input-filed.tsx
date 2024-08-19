import { TextInput, StyleSheet, View } from "react-native";

const MailInputField = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  input: {
    flex: 1,
    height: 17,
    padding: 0,
    fontWeight: 'medium',
    fontSize: 14,
  },
});

export default MailInputField;
