import React from "react";
import {
  SafeAreaView,
  Pressable,
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';


function App({ tasks }) {
    return (
        <SafeAreaView>
            <ScrollView>
                {tasks.map((task, index) => (
                    <Pressable key = {index}>
                        <View style={[styles.task]}>
                            <Text style={styles.taskText}>{task}</Text> 
                        </View>
                    </Pressable>
                ))}
                {/* <Pressable>
                <View style={[styles.task]}>
                    <Text style={styles.taskText}>Go to gym</Text>
                </View>
                </Pressable>
                <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Walk dog</Text>
                </View> */}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});
  

export default App;

  