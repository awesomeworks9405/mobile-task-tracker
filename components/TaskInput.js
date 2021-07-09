import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';


const TaskInput = props => {

    const [inputTask, setInputTask] = useState('');

    const taskInputHandler = (test) => {
        setInputTask(test);
      };

    const addInTask = () => {
      props.display(inputTask);

      setInputTask('');
    }

    return (
      <Modal visible={props.visibility}>
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputs} placeholder="Enter Task" onChangeText={taskInputHandler} value={inputTask} />
            <View style={styles.buttonDisplay}>
              <View style={styles.button}>
                <Button title="CANCEL" color="red" onPress={props.close} />
              </View>
              <View style={styles.button}>
                <Button title="ADD" onPress={addInTask} />
              </View>
            </View>
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
      }, 
      inputs: {
        borderWidth: 1,
        width: '80%',
        padding: 10,
      },
      buttonDisplay: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '60%'
      },
      button: {
        width: '40%',
        backgroundColor: 'rgba(24, 50, 210, 0.2)',
        borderWidth: 1,
        borderColor: 'blue',
        marginTop: 10

      }
})

export default TaskInput;