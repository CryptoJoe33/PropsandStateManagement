import React from "react";
import ToDoList from "../ToDoList";
import ToDoForm from "../TodoForm";
import {SafeAreaView, Button} from "react-native";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

function Home({navigation}){
    const [tasks, setTasks] = useState(['Do Laundry', 'Go to Gym', 'Walk Dog'])

    const handleAdd = (newTask) => {
      setTasks([...tasks, newTask]);
    }

    return (
        <MainLayout>
            <SafeAreaView>
                <ToDoList tasks = {tasks}/>
                <ToDoForm onAdd = {handleAdd}/>
                <Button title="Go to About" onPress={() => navigation.navigate('About')}/>
            </SafeAreaView>
        </MainLayout>
    )
}
export default Home;