import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import WebView from 'react-native-webview';
import {HeightWidthView} from '../../styles';

export default function Browser() {
  return (
    <HeightWidthView height="1000px">
      <WebView source={{uri: 'https://google.com'}} />
    </HeightWidthView>
  );
}
