import React from 'react';
import {Platform, Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export const Map = () => {
  return (
    <View style={{height: 1000, width: 500}}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
