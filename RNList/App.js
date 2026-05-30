import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import pokemonList from './data.json';

export default function App() {
  return (
    <View style={styles.container}>
      {pokemonList.map((pokemon) => {
        return (
          <View key={pokemon.id}>
            <Text>{pokemon.type}</Text>
            <Text>{pokemon.name}</Text>
          </View>
        );
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
