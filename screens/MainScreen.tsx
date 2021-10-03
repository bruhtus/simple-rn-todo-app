import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable
} from 'react-native';

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
          complete: false,
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

  // ref: https://jeffgukang.github.io/react-native-tutorial/docs/basic-tutorial/basic-features(todolist)/13-complete-items/complete-items.html
  const completeTaskHandler = (key) => {
    setData(data.map((task) => {
      return task.key == key ? {...task, complete: !task.complete} : task;
    }));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ListEmptyComponent={() => <EmptyComponent />}
        keyboardShouldPersistTaps='handled'
        renderItem={({item}) => (
          <Pressable
            onPress={() => completeTaskHandler(item.key)}
          >
            <TaskList
              item={item}
              complete={item.complete}
              deleteTaskHandler={deleteTaskHandler}
            />
          </Pressable>
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
