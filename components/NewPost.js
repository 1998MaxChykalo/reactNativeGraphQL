import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PostForm from './posts/PostForm';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const NewPost = ({ newPost, navigation }) => {
  const [loading, setLoading] = useState(false);
  const createPost = ({ title, body }) => {
    setLoading(true);
    newPost({
      variables: {
        title,
        body
      }
    })
      .then(() => {
        setLoading(false);
        navigation.goBack();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <PostForm onSubmit={createPost} />
      )}
    </View>
  );
};

const newPost = gql`
  mutation newPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
    }
  }
`;

export default graphql(newPost, {
  name: 'newPost',
  options: {
    refetchQueries: ['postsQuery']
  }
})(NewPost);
