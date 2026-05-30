import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Text,
  Switch,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const containerStyle = [styles.container, isDarkMode ? styles.containerDark : styles.containerLight];
  const textStyle = [styles.text, isDarkMode ? styles.textDark : styles.textLight];

  return (
    <SafeAreaView style={containerStyle}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="email@example.com"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="twitter"
      />
      <TextInput style={styles.multilineText} placeholder="message" multiline />
      <Text style={textStyle}>My name is {name}</Text>
      <View style={styles.switchContainer}>
        <Text style={textStyle}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          trackColor={{ false: '#767577', true: 'lightblue' }}
          thumbColor="#f4f3f4"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerLight: {
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  textLight: {
    color: '#111',
  },
  textDark: {
    color: '#f2f2f2',
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
});
