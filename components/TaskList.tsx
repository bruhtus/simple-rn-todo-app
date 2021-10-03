import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function TaskList({item, complete, deleteTaskHandler}) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.completeButton}>
          <AntDesign
            name={!complete ? 'right' : 'check'}
            style={!complete ?
              {fontSize: 25, color: '#171717'} :
              {fontSize: 25, color: '#006f00'}
            }
          />
        </View>
        <Text
          style={!complete ?
            null :
            {textDecorationLine: 'line-through'}
          }
        >
          {item.value}
        </Text>
      </View>
      <View style={styles.deleteButton}>
        <Pressable
          onPress={() => deleteTaskHandler(item.key)}
        >
          <AntDesign
            name='delete'
            style={{fontSize: 25, color: '#9b1300'}}
          />
        </Pressable>
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
  completeButton: {
    marginRight: '10%',
  },
});
