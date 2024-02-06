import React, { useRef, useState, useEffect } from 'react';
import {AppState,StyleSheet,View,ImageBackground,StatusBar,Image,TouchableOpacity,} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Sound from 'react-native-sound';

export const backsound = new Sound('menu_main.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}      
});

export var suara = new Sound('sound_effect_2.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}});

const Home: () => React$Node = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ){}

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    if (appState.current === "active"){
      backsound.play();      
    }else{
      backsound.stop();
    }
    // console.log("Status : ", appState.current);    
  };
      
  backsound.setNumberOfLoops(-1).play();    

  function mulai(){    
    Actions.menu();
    suara.play();
    backsound.setVolume(.5);    
  }


    
  return (
      <>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../android/app/src/main/res/raw/bg_1.png')} style={styles.bg}>
        <Image source={require('../../android/app/src/main/res/raw/mengenal_wayang.png')} style={styles.logo}></Image> 
        <View style={{flexDirection:'row', flex:1, justifyContent:'center', top:10}}>
          <TouchableOpacity onPress={mulai} android_disableSound={true} style={{backgroundColor:'transparent',alignSelf:'center', marginRight:20}}>
            <Image source={require('../../android/app/src/main/res/raw/masuk.png')} style={styles.tombol}></Image>            
          </TouchableOpacity>   
          <TouchableOpacity onPress={Actions.daftar} android_disableSound={true} style={{backgroundColor:'transparent',alignSelf:'center'}}>
            <Image source={require('../../android/app/src/main/res/raw/t_daftar.png')} style={styles.tombol}></Image>            
          </TouchableOpacity>       
        </View>          
          <TouchableOpacity onPress={Actions.setting} style={styles.setting} android_disableSound>
            <Image source={require('../../android/app/src/main/res/raw/t_setting.png')} style={styles.set}></Image>            
          </TouchableOpacity>
      </ImageBackground>
      </>    
  );
};

const styles = StyleSheet.create({  
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },  
  logo: {    
    alignSelf:'center',
    top:20,
    width:350,
    height:178,
    resizeMode:'contain'  
  },
  tombol: {    
    alignSelf:'center',
    width:150,
    height:60,
    top:-10,  
  },
  setting: {    
    backgroundColor:'transparent',            
    top:-40,
    left:'90%',
    width:40,   
  },
  set: {        
    width:40,
    height:40,     
  },
});
export default Home;