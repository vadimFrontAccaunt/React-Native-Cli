import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';

import {images} from '../../assets';
import {AbsoluteTouchableOpacity, FlexedView, StyledImage} from '../../styles';

export const ImagePickerAvatar = ({uri, onPress}) => {
  return (
    <FlexedView marginT="40%" justifyContent="center">
      <StyledImage
        height="260px"
        width="260px"
        source={uri ? {uri} : images.avatar}
      />
      <AbsoluteTouchableOpacity onPress={onPress}>
        <StyledImage height="54px" width="54px" source={images.addButton} />
      </AbsoluteTouchableOpacity>
    </FlexedView>
  );
};
