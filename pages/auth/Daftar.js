import React from 'react';
import {StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';


const Daftar: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden></StatusBar>
      <WebView
        source={{
          uri: 'https://download.isbi.ac.id/wayang/'
        }}
        style={{ marginTop: 20 }}
      />
    </>
  );
};



export default Daftar;