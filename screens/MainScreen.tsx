import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function MainScreen() {
  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>
      <Text>
        This is main screen.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#171717',
    alignItems: 'center'
  },
});
