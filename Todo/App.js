import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Store from './redux/store';
import { Provider } from 'react-redux';
import Form from './screens/Form';
import Tasks from './screens/Tasks';

export default function App() {
  const {
    screen,

  } = styles;

  return (
    <Provider store={Store}>
      <View style={screen}>

      <Form />
      <Tasks />

      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
