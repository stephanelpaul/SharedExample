import React from 'react';
import {Button, View} from 'react-native';
import Animated from 'react-native-reanimated';

export const CardDetails = ({navigation}) => {
  return (
    <View style={{flex: 1, marginTop: 50}}>
      <Animated.View
        style={{width: 100, height: 100, backgroundColor: 'green'}}
        sharedTransitionTag="sharedTag"
      />
      <Button title="Go back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
