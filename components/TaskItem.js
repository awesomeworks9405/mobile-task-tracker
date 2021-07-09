import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const TaskItem = props => {

    return (
        <TouchableOpacity activeOpacity={0.5} onLongPress={props.delete.bind(this, props.id)}>
            <View style={styles.inputDisplay}>
                <Text>{props.show}</Text>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    inputDisplay: {
        backgroundColor: 'rgba(22, 2, 240, 0.2)',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
      }
})

export default TaskItem;