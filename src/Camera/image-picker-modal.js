import React from 'react';
import {SafeAreaView, Text, Image, Pressable, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import {images} from '../../assets';
import {FlexedView, StyledImage, StyledPressable} from '../../styles';

export function ImagePickerModal({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <FlexedView bg="white">
        <StyledPressable onPress={onImageLibraryPress}>
          <StyledImage height="30px" width="30px" source={images.image} />
          <Text>Library</Text>
        </StyledPressable>
        <StyledPressable onPress={onCameraPress}>
          <StyledImage height="30px" width="30px" source={images.camera} />
          <Text>Camera</Text>
        </StyledPressable>
      </FlexedView>
    </Modal>
  );
}
