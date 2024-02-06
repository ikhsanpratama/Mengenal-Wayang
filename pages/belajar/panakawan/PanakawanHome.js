import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity, ScrollView, Text, Pressable} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Sound from 'react-native-sound';
import {backsound} from '../../Home';

export const sound_panakawan = new Sound('menu_panakawan.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {   
    console.log('playback failed due to audio decoding errors'); 
  }     
});

const playSound = () => {     
  sound_panakawan.setCurrentTime(0);   
  sound_panakawan.setNumberOfLoops(-1).setVolume(.5).play();    
};

const PandawaHome: () => React$Node = () => {  
  backsound.release();  
  setTimeout(playSound,1000);
  
  // function video_play(){
  //   Actions.videopandawa();    
  // }
  function kembali(){
    sound_panakawan.pause();
    backsound.setCurrentTime(0).setVolume(.5).play();
    Actions.replace('belajar');
  }

  function rumah(){
    sound_panakawan.pause();
    backsound.setCurrentTime(0).setVolume(.5).play();
    Actions.replace('home');
  }

  function setting(){
    Actions.setting({audio:'panakawan'});
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../../../android/app/src/main/res/raw/bg_3.png')} style={styles.bg}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent:'center'}}>
              <View style={{ backgroundColor:'transparent', height:'25%', alignContent:'center', flex:1,flexDirection:'row'}}>
                  <View style={{width:'80%', justifyContent:'center', alignItems:'center'}}>
                    <Image 
                        source={require('../../../../android/app/src/main/res/raw/panakawan.png')} 
                        style={{width:290,height:'70%'}}>
                    </Image>
                  </View>
                  <View style={{width:'20%', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={Actions.setting} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/t_setting.png')} 
                            style={{width:50,height:50}}>
                        </Image> 
                    </TouchableOpacity>
                    
                  </View>                                                 
              </View>
              <View style={{ backgroundColor:'transparent', height:'75%', justifyContent:'center', flexDirection:'column', flex:-1}}>
                  <View style={{alignContent:'center', backgroundColor:'transparent', height:'70%'}}>
                    <TouchableOpacity onPress={Actions.panakawan} style={{backgroundColor:'transparent', justifyContent:'center',alignItems:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/panakawan_1.png')} 
                            style={{width:'59%',height:'100%'}}>
                        </Image> 
                    </TouchableOpacity>                                                           
                  </View>
                  <View style={{backgroundColor:'transparent', height:'30%', flex:1, flexDirection:'row', justifyContent:'center'}}>
                      <View style={{width:'15%', alignItems:'center'}}>
                            <TouchableOpacity onPress={Actions.home}>
                                <Image 
                                    source={require('../../../../android/app/src/main/res/raw/t_home.png')} 
                                    style={{width:50,height:50}}>
                                </Image> 
                            </TouchableOpacity>
                      </View>
                      <View style={{width:'70%', alignItems:'center'}}>
                            <TouchableOpacity onPress={Actions.panakawandetail} style={{backgroundColor:'transparent'}}>
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
