import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function Counter () {
  const [count, setCount] = useState(0);
  return (
    <View style = {styles.container}>
      <View style = {styles.box}>
          <Text> { count } </Text>
        <View>
          <Pressable onPress = { () => setCount(count+1)}>
          <Text style = {styles.buttons}>+</Text>
          </Pressable>
        </View>
        <View>
        <Pressable onPress = { () => setCount(count-1)}>
        <Text style = {styles.buttons}>-</Text>
        </Pressable>
        </View>
        <View>
        <Pressable onPress = { () => setCount(0)}>
        <Text style = {styles.buttons}>Reset</Text>
        </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  box: {
    borderRadius: 10,
    height: 400,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 10px 30px 6px #BBBBBB"
  },
  buttons: {
      height: 42,
      width: 240,
      padding: 30,
      fontSize: 18,
      fontWeight: 400,
      margin: 8,
      borderColor: "#E5E5E5",
      backgroundColor: "gray",
      borderWidth: 1.9,
      borderRadius: 10
  }
})