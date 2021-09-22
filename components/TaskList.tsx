import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function TaskList({item, deleteTaskHandler}) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>
          {item.value}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => deleteTaskHandler(item.key)}
      >
        <View style={styles.deleteButton}>
          <AntDesign
            name='delete'
            style={{fontSize: 25, color: '#9b1300'}}
          />
        </View>
      </TouchableOpacity>
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
  deleteButton: {
    width: 25,
    height: 25,
    marginRight: 20,
    justifyContent: 'center',
  },
});
