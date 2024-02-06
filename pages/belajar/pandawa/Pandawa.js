import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity, ScrollView, Text, Pressable} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Sound from 'react-native-sound';
import {sound_pandawa} from './PandawaHome';

const sejarah_pandawa = new Sound('sejarah_pandawa.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}     
});

const Pandawa: () => React$Node = () => { 
  function kembali(){
    sejarah_pandawa.stop();
    Actions.replace('pandawahome');    
  }

  function video_play(){
    Actions.videopandawa();
    sejarah_pandawa.stop();
    sound_pandawa.stop();
  }
  
  sound_pandawa.setVolume(.1);
  sejarah_pandawa.setVolume(.5).play(()=>sejarah_pandawa.release()); 

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../../../android/app/src/main/res/raw/bg_1.png')} style={styles.bg}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent:'center'}}>
              <View style={{ backgroundColor:'transparent', height:'20%', justifyContent:'center', alignContent:'center'}}>
                <TouchableOpacity onPress={kembali} style={{backgroundColor:'transparent', alignSelf:'center', left:-300, top:30}}>
                    <Image 
                        source={require('../../../../android/app/src/main/res/raw/t_return.png')} 
                        style={{width:50,height:50}}>
                    </Image> 
                </TouchableOpacity>
                <Image 
                    source={require('../../../../android/app/src/main/res/raw/pandawa.png')} 
                    style={styles.header}>
                </Image>                
              </View>
              <View style={{ backgroundColor:'transparent', height:'80%', justifyContent:'center'}}>
                <Image source={require('../../../../android/app/src/main/res/raw/board_1.png')} style={styles.board}></Image>
                <ScrollView style={styles.scrollView}>
                  <Text style={styles.text}>Pandawa adalah sebutan untuk keturunan Prabu Pandu Déwanata yang merupakan Ksatria dari Negara Astina. Pandawa terdiri dari lima anak laki-laki, yaitu Yudistira, Bima, Arjuna, Nakula dan Sadewa. Pandawa termasuk dalam tokoh Protagonis atau tokoh baik dalam cerita Mahabrata, dalam kesehariannya Pandawa selalu ditemani oleh Panakawan, baik dalam keadaan susah maupun senang. Mari kita kenali tokoh-tokoh dari Pandawa.</Text>
                  <Pressable
                        style={styles.tombol}
                        onPress={video_play}
                        android_disableSound={true}>
                        <Text style={styles.textStyle}>Putar Video</Text>
                  </Pressable>
                </ScrollView>
                
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
    alignSelf:'center',
    width:140,
    height:55,
    top:-25,
  },  
  board: {
    alignSelf:'center',
    position:'absolute',        
    width:'70%',
    height:'96.8%',
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

export default Pandawa;
