import { TextInput, StyleSheet, View } from "react-native";

const FullNameInputField = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Fist Name"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        autoCapitalize="words"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  input: {
    flex: 1,
    height: 34,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    fontWeight: 'medium',
    fontSize: 14,
  },
});

export default FullNameInputField;
