import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';

export default function InputComponent() {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <TextInput
          style={styles.input}
          placeholder='Write a task here'
          onChangeText={(newInput) => setValue(newInput)}
          />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            alert('button clicked')
          }}
        >
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  component: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#ffffdf',
    width: '100%',
    marginRight: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 60,
  },
  addButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffdf',
    marginBottom: 20,
    borderRadius: 60,
  },
});
