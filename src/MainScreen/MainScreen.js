import {View, Text, Pressable, ScrollView, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import {useSelector} from 'react-redux';
import ElementOfCartoon from './ElementOfCartoon';
import {Context} from '../../redux/Context';
import {FlexedView, TextElementOfMenu} from '../../styles';
import Chart from '../ChartBar/Chart';
import RandomScreen from '../RandomScreen/RandomScreen';

export const MainScreen = ({navigation}) => {
  const state = useSelector(state => state.cartoons);
  const [context, setContext] = useContext(Context);
  const setLanguage = () => {
    setContext(!context);
  };
  const LoginScreenF = () => {
    navigation.navigate('LoginPage');
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
        <Chart />
        <RandomScreen />
        <FlexedView marginT="20px" marginL="20px" marginR="20px">
          <Pressable onPress={setLanguage}>
            {context ? (
              <TextElementOfMenu paddingT="5px">
                Change Language
              </TextElementOfMenu>
            ) : (
              <TextElementOfMenu paddingT="5px">Сменить язык</TextElementOfMenu>
            )}
          </Pressable>
          <Pressable onPress={LoginScreenF}>
            {context ? (
              <TextElementOfMenu paddingT="15px">Login</TextElementOfMenu>
            ) : (
              <TextElementOfMenu paddingT="15px">Логин</TextElementOfMenu>
            )}
          </Pressable>
        </FlexedView>
      </ScrollView>
    </SafeAreaView>
  );
};
