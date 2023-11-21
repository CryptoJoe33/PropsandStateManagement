/**
 * Sample React Native ToDoList
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../src/screens/Home";
import About from "../src/screens/About";

const Stack = createStackNavigator();

function TodoList() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});


export default TodoList;
