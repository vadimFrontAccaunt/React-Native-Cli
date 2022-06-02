import {
  View,
  Text,
  Pressable,
  ScrollView,
  SafeAreaView,
  Button,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {useSelector} from 'react-redux';
import ElementOfCartoon from './ElementOfCartoon';
import {Context} from '../../redux/Context';
import {FlexedView, TextElementOfMenu} from '../../styles';
import Chart from '../ChartBar/Chart';
import RandomScreen from '../RandomScreen/RandomScreen';
import Modal from 'react-native-modal';

export const MainScreen = ({navigation}) => {
  const state = useSelector(state => state.cartoons);
  const [context, setContext] = useContext(Context);
  const [modalWindow, setModalWindow] = useState(false);
  const setLanguage = () => {
    setContext(!context);
  };
  const LoginScreenF = () => {
    navigation.navigate('LoginPage');
  };

  const showModalWindow = () => {
    setModalWindow(!modalWindow);
  };

  const showBrowser = () => {
    navigation.navigate('Browser');
  };

  const SignScreen = () => {
    navigation.navigate('Sign');
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
          <Pressable onPress={SignScreen}>
            {context ? (
              <TextElementOfMenu paddingT="15px">Sign</TextElementOfMenu>
            ) : (
              <TextElementOfMenu paddingT="15px">Подпись</TextElementOfMenu>
            )}
          </Pressable>
          <Pressable onPress={showModalWindow}>
            {context ? (
              <TextElementOfMenu marginT="30px" paddingT="15px">
                Modal
              </TextElementOfMenu>
            ) : (
              <TextElementOfMenu marginT="30px" paddingT="5px">
                Модальное окно
              </TextElementOfMenu>
            )}
          </Pressable>
          <Pressable onPress={showBrowser}>
            {context ? (
              <TextElementOfMenu marginT="30px" paddingT="15px">
                Browser
              </TextElementOfMenu>
            ) : (
              <TextElementOfMenu marginT="30px" paddingT="15px">
                Браузер
              </TextElementOfMenu>
            )}
          </Pressable>
          <Modal isVisible={modalWindow}>
            <Button title="Hide modal" onPress={showModalWindow} />
          </Modal>
        </FlexedView>
      </ScrollView>
    </SafeAreaView>
  );
};
