import React, {useContext, useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Context} from '../../redux/Context';
import {actions} from '../../redux/store';
import {BorderedText, FlexedView} from '../../styles';

const ElementOfCartoon = ({cartonNumber, count, navigation}) => {
  const dispatch = useDispatch();
  const deleteCartoon = () => {
    dispatch(actions.deleteCartoonFromList(cartonNumber));
  };

  const findIndex = () => {
    dispatch(actions.findIndexOfCartoon(cartonNumber));
    navigation.navigate('ThecondPage');
  };
  const [context, setContext] = useContext(Context);

  return (
    <FlexedView marginT="25px" marginL="10px" marginR="10px">
      <Pressable onPress={findIndex}>
        <FlexedView width="240px">
          <Text>{cartonNumber}</Text>
          <BorderedText
            backgroundColor="green"
            width="80px"
            borderRadius="20px">
            {count}
          </BorderedText>
        </FlexedView>
      </Pressable>
      <Pressable onPress={deleteCartoon}>
        <FlexedView>
          {context ? (
            <BorderedText
              backgroundColor="red"
              width="80px"
              height="50px"
              paddingT="12px">
              Delete
            </BorderedText>
          ) : (
            <BorderedText
              backgroundColor="red"
              width="80px"
              height="50px"
              paddingT="15px">
              Удалить
            </BorderedText>
          )}
        </FlexedView>
      </Pressable>
    </FlexedView>
  );
};

export default ElementOfCartoon;
