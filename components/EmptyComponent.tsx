import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function EmptyComponent() {
  let today = new Date().toISOString().slice(0, 10);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Nothing to do, relax!
      </Text>
      <Text style={styles.text}>
        {today}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 650,
  },
  text: {
    color: '#ffffdf',
    fontSize: 20,
  },
});
