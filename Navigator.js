import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Post from './components/Post';
import Posts from './components/Posts';
import navigationStyles from './styles/navigationStyles';
import NewPost from './components/NewPost';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  newPost: {
    backgroundColor: '#82d8d8',
    padding: 20
  },
  newPostText: {
    fontSize: 20,
    textAlign: 'center'
  }
});

function Home({ navigation }) {
  const goToNewPost = () => {
    navigation.navigate('NewPost');
  };
  return (
    <View style={styles.container}>
      <Posts navigation={navigation} />
      <TouchableHighlight onPress={goToNewPost} style={styles.newPost}>
        <Text style={styles.newPostText}>New Post +</Text>
      </TouchableHighlight>
    </View>
  );
}

Home.navigationOptions = {
  title: 'Home',
  ...navigationStyles
};

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home
    },
    Post: {
      screen: Post
    },
    NewPost: {
      screen: NewPost
    }
  })
);
