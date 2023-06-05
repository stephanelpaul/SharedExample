import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from './src/screens/Home';
import {CardDetails} from './src/screens/CardDetails';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CarDetails" component={CardDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
