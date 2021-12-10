import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Helsinki from './Helsinki';
import Tampere from './Tampere';
import Turku from './Turku';

const Tab = createMaterialTopTabNavigator();

const AvailableShiftsScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontWeight: "bold", fontSize: 15},
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'grey'
            }}
        >
            <Tab.Screen name="Helsinki" component={Helsinki} />
            <Tab.Screen name="Tampere" component={Tampere} />
            <Tab.Screen name="Turku" component={Turku} />
        </Tab.Navigator>
    )
}

export default AvailableShiftsScreen

const styles = StyleSheet.create({})
