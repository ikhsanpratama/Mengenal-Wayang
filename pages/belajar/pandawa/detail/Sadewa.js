import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity, ScrollView, Text, Pressable} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Sound from 'react-native-sound';
import {sound_pandawa} from '../PandawaHome';

const audio_sadewa = new Sound('audio_sadewa.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}     
});

const narasi_sadewa = new Sound('narasi_sadewa.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}     
});

const DetailSadewa: () => React$Node = () => {  
  
  setTimeout(play_narasi,2000);
  function play_narasi(){
    sound_pandawa.setVolume(.1)
    narasi_sadewa.setVolume(.5).play(()=>{narasi_sadewa.release()});
  }  

  function kembali(){
      narasi_sadewa.stop();
      audio_sadewa.stop();
      Actions.replace('pandawadetail');    
    }

  function audio_play(){        
    narasi_sadewa.stop();
    audio_sadewa.play(()=>{audio_sadewa.release()});
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../../../../android/app/src/main/res/raw/bg_1.png')} style={styles.bg}>
      <View style={{flex: 1, flexDirection: 'column', backgroundColor:'transparent'}}>
              <View style={{ backgroundColor:'transparent', height:'20%', width:'100%', justifyContent:'center', left:120}}>                    
                    <Image 
                      source={require('../../../../../android/app/src/main/res/raw/n_sadewa.png')} 
                      style={{width:'20%',height:'70%'}}>
                    </Image>                                                                                  
              </View>
              <View style={{ backgroundColor:'transparent', height:'80%', flexDirection:'column', flex:1}}>
                  <View style={{backgroundColor:'transparent', height:'80%', width:'100%', flex:1, flexDirection:'row'}}>
                      <View style={{width:'40%', backgroundColor:'transparent'}}>
                        <Image source={require('../../../../../android/app/src/main/res/raw/sadewa_1.png')} style={{width:90,height:'100%', right:-130}}></Image>
                      </View>
                      <View style={{width:'60%', alignItems:'center', backgroundColor:'transparent'}}>
                        <Image source={require('../../../../../android/app/src/main/res/raw/board_2.png')} style={{width:360,height:'120%', top:-20, position:'absolute'}}></Image>
                        <ScrollView style={styles.scrollView}>
                        <Text style={styles.text}>Aku Sadewa saudara kembar Nakula. Tentunya aku dan Nakula juga merupakan anak dari Ayah Prabu Pandu Dewanata dan Ibunda Dewi Madrin. Semasa kita kecil, kita tinggal di negara Astina bersama kakak-kakak kita. Menurut leluhurku kehadiran Kita melambangkan persahabatan yang kekal,  karena kemanapun kita pergi kita selalu bersama dan kerjasama. Kita selalu membela kebenaran, dan sayang kepada keluarga kita.</Text>
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
      width:'75%'
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

export default DetailSadewa;
