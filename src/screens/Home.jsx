import React from "react";
import ToDoList from "../ToDoList";
import ToDoForm from "../TodoForm";
import {SafeAreaView, Button} from "react-native";
import MainLayout from "../layouts/MainLayout";

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
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
            </SafeAreaView>
        </MainLayout>
    )
}
export default Home;