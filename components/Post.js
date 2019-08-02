import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';
import { Text, View } from 'react-native';
import navigationStyles from '../styles/navigationStyles';

const Post = ({ Post, loading }) => {
  if (loading) return <Text>...Loading</Text>;
  return (
    <View>
      <Text>{Post.id}</Text>
      <Text>{Post.title}</Text>
    </View>
  );
};

Post.navigationOptions = {
  title: 'Post',
  ...navigationStyles
};

const postQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
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
