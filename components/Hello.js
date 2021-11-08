import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function Counter () {
  const [name, setName] = useState('guest');
  return (
    <View style = {styles.container}>
      <View style = {styles.box}>
          <Text> Hello { name } </Text>
        <View>
          <Pressable onPress = { () => setName('Lena')}>
          <Text style = {styles.buttons}>Lena</Text>
          </Pressable>
        </View>
        <View>
        <Pressable onPress = { () => setName('Karim')}>
        <Text style = {styles.buttons}>Karim</Text>
        </Pressable>
        </View>
        <View>
        <Pressable onPress = { () => setName('Trésor')}>
        <Text style = {styles.buttons}>Trésor</Text>
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