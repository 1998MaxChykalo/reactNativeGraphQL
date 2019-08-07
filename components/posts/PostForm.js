import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
  title: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1
  },
  body: {
    textAlignVertical: 'top',
    height: 400,
    borderColor: '#333',
    borderWidth: 1
  }
});

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  return (
    <View>
      <TextInput style={styles.title} value={title} onChangeText={setTitle} />
      <TextInput style={styles.body} value={body} onChangeText={setBody} />
      <Button title="Save Post" onPress={() => onSubmit({ title, body })} />
    </View>
  );
};

export default PostForm;
