import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Helsinki from './Helsinki';
import Tampere from './Tampere';
import Turku from './Turku';
import { fetchShifts } from '../redux'


const Tab = createMaterialTopTabNavigator();

const AvailableShiftsScreen = ({ fetchShift }) => {
    useEffect(() => {
        fetchShift()
    }, [])
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShift: () => dispatch(fetchShifts())
    }
}

export default connect(null, mapDispatchToProps)(AvailableShiftsScreen)

const styles = StyleSheet.create({})