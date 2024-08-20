import PageStyles from 'components/common/login-signup/style.module';
import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';

const LoginOptions = () => {
  const [isRemember, setIsRemember] = useState<boolean>(false);

  const onPress = () => {
    setIsRemember(!isRemember);
  };

  return (
    <View style={styles.optionsRow}>
      <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
        {isRemember ? (
          <Icon name="checkbox-active" size={16} color={'#383F41'} />
        ) : (
          <Icon name="checkbox-passive" size={16} color={'#383F41'} />
        )}
        <Text style={styles.checkboxLabel}>Remember Me</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={PageStyles.underlineLink}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#383F41',
  },
});

export default LoginOptions;
