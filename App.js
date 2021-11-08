import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import Hello from './components/Hello'

export default function App () {
  return (
    <View style = { styles.container }>
      <Hello/>
      <Counter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});