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
      <View style={styles.deleteButton}>
        <TouchableOpacity
          onPress={() => deleteTaskHandler(item.key)}
        >
          <AntDesign
            name='delete'
            style={{fontSize: 25, color: '#9b1300'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffdf',
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
  },
  deleteButton: {
    width: 25,
    height: 25,
    marginLeft: '90%',
    position: 'absolute',
  },
});
