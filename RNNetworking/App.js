import { SafeAreaView, StatusBar, View, Text, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError('');
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await response.json();
      setPostList(data);
    } catch (fetchError) {
      setError('Failed to load posts');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const emptyStateText = isLoading ? 'Loading...' : 'No Posts Found';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <FlatList
          data={postList}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            );
          }}
          ListEmptyComponent={<Text>{emptyStateText}</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Top of List</Text>}
          ListFooterComponent={
            <Text style={styles.footerText}>End of list</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: '#666666',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});
