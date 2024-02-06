import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity, ScrollView, Text, Pressable} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Sound from 'react-native-sound';
import {sound_panakawan} from '../PanakawanHome';

const audio_dawala = new Sound('audio_dawala.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}     
});

const narasi_dawala = new Sound('narasi_dawala.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}     
});

const Dawala: () => React$Node = () => {  
    
  function play_narasi(){
    sound_panakawan.setVolume(.1)
    narasi_dawala.setVolume(.5).play();
  }  

  function kembali(){
      narasi_dawala.stop();
      audio_dawala.stop();
      Actions.replace('panakawandetail');    
    }

  function audio_play(){        
    narasi_dawala.stop();
    audio_dawala.play();
  }
  setTimeout(play_narasi,2000);

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../../../../android/app/src/main/res/raw/bg_3.png')} style={styles.bg}>
      <View style={{flex: 1, flexDirection: 'column', backgroundColor:'transparent'}}>
              <View style={{ backgroundColor:'transparent', height:'20%', width:'100%', alignSelf:'center', alignItems:'center', right:-320, top:10}}>
                    <TouchableOpacity onPress={Actions.setting} style={{backgroundColor:'transparent'}}>
                        <Image 
                            source={require('../../../../../android/app/src/main/res/raw/t_setting.png')} 
                            style={{width:50,height:50}}>
                        </Image> 
                    </TouchableOpacity>                                                                                   
              </View>
              <View style={{ backgroundColor:'transparent', height:'80%', flexDirection:'column', flex:1}}>
                  <View style={{backgroundColor:'transparent', height:'80%', width:'100%', flex:1, flexDirection:'row'}}>
                      <View style={{width:'40%', backgroundColor:'transparent'}}>
                        <Image source={require('../../../../../android/app/src/main/res/raw/dawala_1.png')} style={{width:140,height:'100%', right:-130}}></Image>
                      </View>
                      <View style={{width:'60%', alignItems:'center', backgroundColor:'transparent'}}>
                        <Image source={require('../../../../../android/app/src/main/res/raw/board_2.png')} style={{width:400,height:'125%', top:-20, position:'absolute'}}></Image>
                        <ScrollView style={styles.scrollView}>
                        <Text style={styles.text}>Aku adalah anak kedua dari Bapak dawala Badranaya. Aku tinggal di Tumaritis bersama Ayah dan saudaraku, aku juga Panakawan Pandawa. Kemanapun aku pergi aku selalu bersama-sama dengan ayah dan saudaraku, Sudah menjadi kewajibanku untuk membantu mengutarakan pendapat dan menawarkan solusi pada ketika Pandawa  dalam keadaan susah.</Text>
                        <Pressable
                              style={styles.tombol}
                              onPress={audio_play}
                              android_disableSound={true}>
                              <Text style={styles.textStyle}>Putar Audio</Text>
                        </Pressable>
                </ScrollView> 
                      </View>  
                  </View>
                  <View style={{backgroundColor:'transparent', height:'20%', width:'100%', flex:-1, flexDirection:'row', justifyContent:'center'}}>
                      <View style={{width:'50%', alignSelf:'center', alignItems:'center'}}>
                            <TouchableOpacity onPress={Actions.home}>
                                <Image 
                                    source={require('../../../../../android/app/src/main/res/raw/t_home.png')} 
                                    style={{width:50,height:50}}>
                                </Image> 
                            </TouchableOpacity>
                      </View>                      
                      <View style={{width:'50%', alignSelf:'center', alignItems:'center'}}>
                            <TouchableOpacity onPress={kembali}>
                                <Image 
                                    source={require('../../../../../android/app/src/main/res/raw/t_return.png')} 
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
    scrollView: {         
      marginVertical:44,
      left:1,
      alignSelf:'center',
      width:'80%'
    },
    text: {    
      fontSize: 20,
      fontWeight:'500',
      color:'black',
      fontFamily:'Wayang-Satu',
      textAlign:'center'
    },  
    tombol: {
      backgroundColor: 'red',
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      alignSelf:'center',
      width:200        
    },
    textStyle: {
      color: "white",    
      textAlign:"center",
      fontFamily:'Wayang-Empat',    
      fontSize:24
    }, 
  });

export default Dawala;
