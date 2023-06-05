import React from 'react';
import {Button, View} from 'react-native';
import Animated from 'react-native-reanimated';

export const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{width: 150, height: 150, backgroundColor: 'green'}}
        sharedTransitionTag="sharedTag"
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('CarDetails')}
      />
    </View>
  );
};
