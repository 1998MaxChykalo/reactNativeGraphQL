import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';
import { FlatList, Text, View } from 'react-native';

const Posts = ({ loading, allPosts, navigation }) => {
  if (loading) return null;
  return (
    <View>
      <FlatList
        data={allPosts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text
            onPress={() =>
              navigation.navigate('Post', {
                id: item.id
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
  {
    allPosts {
      title
      id
    }
  }
`;

export default graphql(postsQuery, {
  props: ({ data }) => ({ ...data })
})(Posts);
