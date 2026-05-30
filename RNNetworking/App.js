import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Pressable,
} from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  const fetchData = async (limit = 10, { showLoader = true } = {}) => {
    try {
      if (showLoader) {
        setIsLoading(true);
      }
      setError('');
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const data = await response.json();
      setPostList(data);
    } catch (fetchError) {
      setError('Failed to load posts');
    } finally {
      if (showLoader) {
        setIsLoading(false);
      }
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData(20, { showLoader: false });
    setRefreshing(false);
  };

  const handlePost = async () => {
    if (!postTitle.trim() || !postBody.trim()) {
      setError('Title and body are required');
      return;
    }

    try {
      setIsPosting(true);
      setError('');
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: postTitle.trim(),
          body: postBody.trim(),
          userId: 1,
        }),
      });
      const newPost = await response.json();
      setPostList((previous) => [newPost, ...previous]);
      setPostTitle('');
      setPostBody('');
    } catch (postError) {
      setError('Failed to create post');
    } finally {
      setIsPosting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  const emptyStateText = 'No Posts Found';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Post title"
          value={postTitle}
          onChangeText={setPostTitle}
        />
        <TextInput
          style={[styles.input, styles.bodyInput]}
          placeholder="Post body"
          value={postBody}
          onChangeText={setPostBody}
          multiline
        />
        <Pressable onPress={handlePost} disabled={isPosting}>
          <Text style={styles.linkText}>
            {isPosting ? 'Posting...' : 'Add Post'}
          </Text>
        </Pressable>
      </View>
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
          refreshing={refreshing}
          onRefresh={handleRefresh}
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
  loadingContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#cfcfcf',
    backgroundColor: 'white',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  bodyInput: {
    minHeight: 40,
    textAlignVertical: 'top',
  },
  linkText: {
    color: '#1e66f5',
    textAlign: 'center',
    paddingVertical: 6,
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
