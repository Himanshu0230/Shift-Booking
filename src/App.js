import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MyShiftsScreen from './screens/MyShiftsScreen'
import AvailableShiftsScreen from './screens/AvailableShiftsScreen'

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <Provider store={store} >
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        tabBarIconStyle: { display: 'none' },
                        tabBarLabelPosition: "beside-icon",
                        tabBarLabelStyle: { fontWeight: "bold", fontSize: 16 },
                        headerShown: false,
                    }}
                >
                    <Tab.Screen name="My shifts" component={MyShiftsScreen} />
                    <Tab.Screen name="Available shifts" component={AvailableShiftsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App