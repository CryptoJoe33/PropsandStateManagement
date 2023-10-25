/**
 * Sample React Native ToDoList
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './TodoForm';


function TodoList() {

  const [tasks, setTasks] = useState(['Do Laundry', 'Go to Gym', 'Walk Dog'])

  return (
    <SafeAreaView>
      <ToDoList tasks = {tasks}/>
      <ToDoForm/>
    </SafeAreaView>
  );
}


export default TodoList;
