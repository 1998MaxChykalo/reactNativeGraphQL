import ApolloClient, { InMemoryCache } from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { StyleSheet } from 'react-native';
import Navigator from './Navigator';
import navigationStyles from './styles/navigationStyles';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjyu6icgo61l60199lxpa1mr9',
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
);

App.navigationOptions = {
  title: 'Home',
  ...navigationStyles
};

export default App;
