import {Text, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../../redux/Context';
import {BorderedText} from '../../styles';

const RandomScreen = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [statusError, setStatusError] = useState(false);
  const [context, setContext] = useContext(Context);

  useEffect(() => {
    const interval = setInterval(() => {
      let number = Math.random().toFixed(1) * 10;
      if (number > 4) {
        setStatusError(false);
        setRandomNumber(randomNumber => randomNumber + 1);
      } else {
        setStatusError(true);
        setRandomNumber(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      {context ? (
        <BorderedText>Random Number</BorderedText>
      ) : (
        <BorderedText>Случайное Число</BorderedText>
      )}
      <BorderedText>
        {statusError ? (
          <BorderedText>{context ? 'Error' : 'Ошибка'}</BorderedText>
        ) : (
          randomNumber
        )}
      </BorderedText>
    </View>
  );
};

export default RandomScreen;
