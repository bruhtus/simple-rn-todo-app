import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function TaskList({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>
          {item.value}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffdf',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
