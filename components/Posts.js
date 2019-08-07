import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';

const Posts = ({ loading, allPosts, navigation }) => {
  if (loading) return <ActivityIndicator size="large" />;
  return (
    <View>
      <FlatList
        data={allPosts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text
            onPress={() =>
              navigation.navigate('Post', {
                id: item.id,
                title: item.title
              })
            }
          >
            {item.title}
          </Text>
        )}
      />
    </View>
  );
};

const postsQuery = gql`
  query postsQuery {
    allPosts {
      title
      id
    }
  }
`;

export default graphql(postsQuery, {
  props: ({ data }) => ({ ...data })
})(Posts);
