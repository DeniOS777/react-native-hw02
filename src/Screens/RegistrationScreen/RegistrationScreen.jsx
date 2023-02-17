import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { styles } from './RegistrationScreen.styled';

export const RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedLogin, setFocusedLogin] = useState(false);
  const [isFocusedEmail, setFocusedEmail] = useState(false);
  const [isFocusedPassword, setFocusedPassword] = useState(false);
  const [isSpaceKeyboard, setIsSpaceKeyboard] = useState(false);

  const handleLogin = text => setLogin(text);
  const handleEmail = text => setEmail(text);
  const handlePassword = text => setPassword(text);

  const handleFocusLogin = () => {
    setFocusedLogin(true);
    setIsSpaceKeyboard(true);
  };
  const handleBlurLogin = () => {
    setFocusedLogin(false);
    setIsSpaceKeyboard(false);
  };

  const handleFocusEmail = () => {
    setFocusedEmail(true);
    setIsSpaceKeyboard(true);
  };
  const handleBlurEmail = () => {
    setFocusedEmail(false);
    setIsSpaceKeyboard(false);
  };

  const handleFocusPassword = () => {
    setFocusedPassword(true);
    setIsSpaceKeyboard(true);
  };
  const handleBlurPassword = () => {
    setFocusedPassword(false);
    setIsSpaceKeyboard(false);
  };

  const handleSubmit = () => {
    if (!login || !email || !password) return;
    console.log({ login, email, password });
    setLogin('');
    setEmail('');
    setPassword('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{ ...styles.form, marginBottom: isSpaceKeyboard ? -98 : 78 }}
        >
          <Text style={styles.title}>Регистрация</Text>
          <TextInput
            onFocus={handleFocusLogin}
            onBlur={handleBlurLogin}
            onChangeText={handleLogin}
            value={login}
            style={{
              ...styles.input,
              borderColor: isFocusedLogin ? '#FF6C00' : '#E8E8E8',
            }}
            placeholder="Login"
          />
          <TextInput
            onFocus={handleFocusEmail}
            onBlur={handleBlurEmail}
            onChangeText={handleEmail}
            value={email}
            style={{
              ...styles.input,
              borderColor: isFocusedEmail ? '#FF6C00' : '#E8E8E8',
            }}
            placeholder="Адрес электронной почты"
          />
          <TextInput
            onFocus={handleFocusPassword}
            onBlur={handleBlurPassword}
            onChangeText={handlePassword}
            value={password}
            style={{
              ...styles.input,
              marginBottom: 0,
              borderColor: isFocusedPassword ? '#FF6C00' : '#E8E8E8',
            }}
            secureTextEntry={true}
            placeholder="Пароль"
          />
          <TouchableOpacity
            onPress={handleSubmit}
            activeOpacity={0.8}
            style={styles.button}
          >
            <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <Text style={styles.redirectTitle}>Уже есть аккаунт? Войти</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
