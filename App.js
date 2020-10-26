/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

const b = () => (
  <View>
    <View>
      <TextInput placeholderColor="#c4c3cb" />
      <TextInput placeholderColor="#c4c3cb" multiline />
      <Button onPress={() => this.submitError()} title="SUbmit error" />
    </View>
  </View>
);

const errorHandler = (e, isFatal) => {
  if (isFatal) {
    return b();
    console.log(40, 'pac is alive');
    //.logException(e);
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler, true);

setNativeExceptionHandler((errorString) => {
  // do the
  // Analytics.logException(e);
  console.log('pac is alive');
});

const crushJSApp = () => {
  const b = null;
  console.log(b.toString());
};

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button onPress={crushJSApp} title="Crush JS" />
      </SafeAreaView>
    </>
  );
};

export default App;
