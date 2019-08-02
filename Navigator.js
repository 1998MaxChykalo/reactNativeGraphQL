import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Post from './components/Post';
import Posts from './components/Posts';
import navigationStyles from './styles/navigationStyles';

function Home({ navigation }) {
  return (
    <View>
      <Posts navigation={navigation} />
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
    }
  })
);
