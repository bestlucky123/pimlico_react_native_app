import {useState} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';

const PasswordInputField = () => {
  const [isHide, setIsHide] = useState<boolean>(true);

  const onPress = () => {
    setIsHide(!isHide);
  };

  return (
    <View style={styles.container}>
      <Icon name="key" size={18} color={'#9D9D9D'} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry={isHide}
      />
      <TouchableOpacity onPress={onPress}>
        {isHide ? (
          <Icon name="eye" size={18} color={'#9D9D9D'} />
        ) : (
          <Icon name="eye-closed" size={18} color={'#9D9D9D'} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
  icon: {
    transform: [{scaleX: -1}, {rotate: '45deg'}],
  },
});

export default PasswordInputField;
