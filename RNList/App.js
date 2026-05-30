import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar as RNStatusBar, FlatList } from 'react-native';
import pokemonList from './data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemonList}
        style={styles.scrollView}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={<View style={{ height: 16 }} />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: RNStatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
});
