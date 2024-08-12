import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {ListView} from "../screens/ListView";
import {DetailsView} from "../screens/DetailsView";

const Stack = createStackNavigator();

export const StackNavigator = () => (
    <Stack.Navigator initialRouteName="ListView">
        <Stack.Screen name="ListView" component={ListView} />
        <Stack.Screen name="DetailsView" component={DetailsView} />
    </Stack.Navigator>
);

