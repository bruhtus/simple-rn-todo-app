import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import InputComponent from '../components/InputComponent.tsx';

export default function MainScreen() {
  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>
      <InputComponent />
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
