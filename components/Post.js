import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';
import { Text, View, ActivityIndicator } from 'react-native';
import navigationStyles from '../styles/navigationStyles';

const Post = ({ Post, loading }) => {
  if (loading) return <ActivityIndicator size="large" />;
  return (
    <View>
      <Text>{Post.body}</Text>
    </View>
  );
};

Post.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title'),
  ...navigationStyles
});

const postQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
      body
    }
  }
`;

export default graphql(postQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.getParam('id')
    }
  })
})(Post);
