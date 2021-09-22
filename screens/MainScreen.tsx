import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import TaskList from '../components/TaskList.tsx';
import InputComponent from '../components/InputComponent.tsx';
import EmptyComponent from '../components/EmptyComponent.tsx';

export default function MainScreen() {
  const [data, setData] = useState([]);

  const addTaskHandler = (value) => {
    setData((prevTask) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTask,
      ];
    });
  };

  const deleteTaskHandler = (key) => {
    setData((prevTask) => {
      return prevTask.filter((task) => task.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ListEmptyComponent={() => <EmptyComponent />}
        renderItem={({item}) => (
          <TaskList
            item={item}
            deleteTaskHandler={deleteTaskHandler}
          />
        )}
      />
      <InputComponent addTaskHandler={addTaskHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginTop: 30,
  },
});
