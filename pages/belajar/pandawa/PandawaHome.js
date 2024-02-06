import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity, ScrollView, Text, Pressable} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Sound from 'react-native-sound';
import {backsound} from '../../Home';

export const sound_pandawa = new Sound('menu_pandawa.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}     
});

const playSound = () => {     
  sound_pandawa.setCurrentTime(0);   
  sound_pandawa.setNumberOfLoops(-1).setVolume(.5).play();    
};

const PandawaHome: () => React$Node = () => {  
  backsound.stop();  
  setTimeout(playSound,1000);  

  function kembali(){
    sound_pandawa.pause();
    backsound.setCurrentTime(0).setVolume(.5).play();
    Actions.replace('belajar');
  }

  function rumah(){
    sound_pandawa.pause();
    backsound.setCurrentTime(0).setVolume(.5).play();
    Actions.replace('home');
  }

  function setting(){
    Actions.setting({audio:'pandawa'});
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../../../android/app/src/main/res/raw/bg_1.png')} style={styles.bg}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent:'center'}}>
              <View style={{ backgroundColor:'transparent', height:'25%', alignContent:'center', flex:1,flexDirection:'row'}}>
                  <View style={{width:'80%', justifyContent:'center', alignItems:'center'}}>
                    <Image 
                        source={require('../../../../android/app/src/main/res/raw/pandawa.png')} 
                        style={{width:200,height:77}}>
                    </Image>
                  </View>
                  <View style={{width:'20%', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={setting} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/t_setting.png')} 
                            style={{width:50,height:50}}>
                        </Image> 
                    </TouchableOpacity>
                    
                  </View>                                                 
              </View>
              <View style={{ backgroundColor:'transparent', height:'75%', justifyContent:'center', flexDirection:'column', flex:-1}}>
                  <View style={{alignContent:'center', backgroundColor:'transparent', height:'70%'}}>
                    <TouchableOpacity onPress={Actions.pandawa} style={{backgroundColor:'transparent', justifyContent:'center',alignItems:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/pandawa_lima_1.png')} 
                            style={{width:'49%',height:'90%'}}>
                        </Image> 
                    </TouchableOpacity>                                                           
                  </View>
                  <View style={{backgroundColor:'transparent', height:'30%', flex:1, flexDirection:'row', justifyContent:'center'}}>
                      <View style={{width:'15%', alignItems:'center'}}>
                            <TouchableOpacity onPress={rumah}>
                                <Image 
                                    source={require('../../../../android/app/src/main/res/raw/t_home.png')} 
                                    style={{width:50,height:50}}>
                                </Image> 
                            </TouchableOpacity>
                      </View>
                      <View style={{width:'70%', alignItems:'center'}}>
                            <TouchableOpacity onPress={Actions.pandawadetail} style={{backgroundColor:'transparent'}}>
                                <Image 
                                    source={require('../../../../android/app/src/main/res/raw/mulai.png')} 
                                    style={{width:100,height:60}}>
                                </Image> 
                            </TouchableOpacity>
                      </View>
                      <View style={{width:'15%', alignItems:'center'}}>
                            <TouchableOpacity onPress={kembali}>
                                <Image 
                                    source={require('../../../../android/app/src/main/res/raw/t_return.png')} 
                                    style={{width:50,height:50}}>
                                </Image> 
                            </TouchableOpacity>
                      </View>
                                                                                   
                  </View>                    
              </View>             
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
  header: {    
    width:140,
    height:55,    
  },  
  board: {
    alignSelf:'center',
    position:'absolute',
    top:10,    
    width:'65%',
    height:'66%',
    opacity:1        
  },  
  scrollView: {
    backgroundColor: 'transparent',    
    marginVertical:60,
    left:1,
    alignSelf:'center',
    width:'60%'
  },
  text: {    
    fontSize: 22,
    fontWeight:'500',
    color:'white',
    fontFamily:'Wayang-Satu',
    textAlign:'left'
  },
  tombol: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    alignSelf:'center',
    width:200,
    marginTop:20        
  },
  textStyle: {
    color: "white",    
    textAlign: "center",
    fontFamily:'Wayang-Empat',    
    fontSize:24
  },
});

export default PandawaHome;
