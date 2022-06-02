import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Signature from 'react-native-signature-canvas';
import {PreView, StyledImage} from '../../styles';

export const Sign = () => {
  const [signature, setSign] = useState(null);
  const RNFS = require('react-native-fs');

  const path = RNFS.DocumentDirectoryPath + 'sign.png';

  const handleOK = signature => {
    console.log(signature);
    setSign(signature);
    RNFS.writeFile(path, signature, 'utf8')
      .then(success => {
        alert('Success saved');
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;
  return (
    <View style={{flex: 1}}>
      <PreView>
        {signature ? (
          <StyledImage
            width="100%"
            height="114px"
            resizeMode={'contain'}
            source={{uri: signature}}
          />
        ) : null}
      </PreView>
      <Signature
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText=""
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
      />
    </View>
  );
};
