import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function TaskList({item}) {
  return (
    <View style={styles.container}>
      <Text>
        {item.value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffdf',
    alignItems: 'center',
    margin: 10,
  },
});
