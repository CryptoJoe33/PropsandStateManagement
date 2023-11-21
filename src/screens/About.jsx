import React from "react";
import {View, Text} from "react-native";
import MainLayout from "../layouts/MainLayout";

function About(){
    return (
        <MainLayout>
            <View>
                <Text>Joey's Awesome To DO List App!!</Text>
                <Text>Version 1.0.0</Text>
                <Text>Created by: Joey Adam</Text>
            </View>
        </MainLayout>
    )
}

export default About;