import {View, Text, Pressable, ScrollView, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import {useSelector} from 'react-redux';
import ElementOfCartoon from './ElementOfCartoon';
import {Context} from '../../redux/Context';
import {FlexedView} from '../../styles';

export const MainScreen = ({navigation}) => {
  const state = useSelector(state => state.cartoons);
  const [context, setContext] = useContext(Context);
  const setLanguage = () => {
    setContext(!context);
  };
  let empty;
  if (state.length === 0) {
    empty = false;
  } else {
    empty = true;
  }
  return (
    <SafeAreaView>
      <ScrollView>
        {context ? (
          <FlexedView marginL="20px" marginR="20px" marginT="5px">
            <Text>CARTON №</Text>
            <Text>ACT.</Text>
          </FlexedView>
        ) : (
          <FlexedView marginL="20px" marginR="20px" marginT="5px">
            <Text>НОМЕР №</Text>
            <Text>КОЛИЧЕСТВО</Text>
          </FlexedView>
        )}
        {empty ? (
          state.map(el => (
            <ElementOfCartoon
              key={el.cartonNumber}
              cartonNumber={el.cartonNumber}
              count={el.count}
              navigation={navigation}
            />
          ))
        ) : (
          <View>
            {context ? (
              <Text>Sorry, my state is empty</Text>
            ) : (
              <Text>Извини, мой стэйт пуст</Text>
            )}
          </View>
        )}
        <Pressable onPress={setLanguage}>
          {context ? <Text>Change Language</Text> : <Text>Сменить язык</Text>}
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
