import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity, } from 'react-native';
import {Actions} from 'react-native-router-flux';
import SQLite from 'react-native-sqlite-2';
import Sound from 'react-native-sound';
import {backsound} from './Home';

// export const back_sound = new Sound('menu_main.mp3', Sound.MAIN_BUNDLE, (error) => {
//   if (error) {}      
// });

const playSound = () => {     
  backsound.setCurrentTime(0);   
  backsound.setNumberOfLoops(-1).play();    
};

const logout = () => {
  const db = SQLite.openDatabase("dataOffline.db", "1.0", "", 1);
    db.transaction(function (txn) {              
      txn.executeSql("DROP TABLE IF EXISTS users", []);
      console.log('data dihapus!');
      Actions.replace('home');
    });
}

const Menu: () => React$Node = () => {  
  // backsound.release();
  setTimeout(playSound,1000);
  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../android/app/src/main/res/raw/bg_1.png')} style={styles.bg}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
              <View style={{ backgroundColor:'transparent', width:'50%', justifyContent:'center'}}>
                <TouchableOpacity onPress={Actions.belajar} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                  <Image source={require('../../android/app/src/main/res/raw/belajar.png')} style={styles.belajar}></Image>                  
                </TouchableOpacity>
              </View>
              <View style={{ backgroundColor:'transparent', width:'50%', justifyContent:'center'}}>
                <TouchableOpacity onPress={Actions.home} style={{backgroundColor:'transparent', alignSelf:'center'}} disabled>
                  <Image 
                    source={require('../../android/app/src/main/res/raw/bermain.png')}
                    style={styles.games}></Image>                  
                </TouchableOpacity>
              </View>
          </View>          
          <View style={{flex:0.5, flexDirection: 'row',backgroundColor: 'transparent', justifyContent:'center'}}>
              <TouchableOpacity onPress={logout} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                <Image 
                  source={require('../../android/app/src/main/res/raw/t_home.png')}
                  style={{width:75, height:75}}></Image>                  
              </TouchableOpacity>    
              <TouchableOpacity onPress={Actions.setting} style={{backgroundColor:'transparent', alignSelf:'center', marginLeft:20}}>
                <Image 
                  source={require('../../android/app/src/main/res/raw/t_setting.png')}
                  style={{width:75, height:75}}></Image>                  
              </TouchableOpacity>        
          </View>
      </ImageBackground>
  </View>    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  games: {                 
    width:265,
    height:150  
  },
  belajar: {           
    width:265,
    height:150
  },
  tombol: {    
    alignSelf:'center',    
    top:0,
    width:75,
    height:75,    
  },
  tombol2: {    
    alignSelf:'center',
    width:100,
    top:-50,
    backgroundColor:'blue',
  },
});

export default Menu;
