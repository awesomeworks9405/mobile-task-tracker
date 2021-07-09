import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import TaskItem from './components/TaskItem';

import TaskInput from './components/TaskInput';

export default function App() {

  const [addTask, setAddTask] = useState([]);

  const [showMode, setShowMode] = useState(false);

  const addTaskHandler = (show) => {
    setAddTask(currenttask => [...currenttask, 
                          {id: Math.random().toString(),
                          value: show}
    ]);

    setShowMode(false);
  };

  const removeTaskHandler = taskId => {
    setAddTask(currenttask => {
      return currenttask.filter((task) => task.id !== taskId);
    })
  }

  const modeHandler = () => {
    setShowMode(true);
  }

  const closeMode = () => {
    setShowMode(false);
  }

  return (
    <View style={styles.container}>
      <Button title="ADD TASK" onPress={modeHandler} />
      <TaskInput display={addTaskHandler} visibility={showMode} close={closeMode} />
      <FlatList data={addTask} renderItem={(showItem) => (
        <TaskItem id={showItem.item.id} show={showItem.item.value} delete={removeTaskHandler} />
      )} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
