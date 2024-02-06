import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity, ScrollView, Text, Pressable} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {sound_panakawan} from './PanakawanHome';
import SoundPlayer from 'react-native-sound-player';


const PanakawanDetail: () => React$Node = () => {  
  function video_play(){
    Actions.videopandawa();
    backsound.pause();
  }

  function backSound(){
    SoundPlayer.loadSoundFile('menu_panakawan','mp3');
    SoundPlayer.play();
    SoundPlayer.resume();
  }

  function semar(){
    SoundPlayer.playSoundFile('suara_semar','mp3');
    Actions.replace('semar');
  }

  function cepot(){
    SoundPlayer.playSoundFile('suara_cepot','mp3');
    Actions.replace('cepot');
  }

  function dawala(){
    SoundPlayer.playSoundFile('suara_dawala','mp3');
    Actions.replace('dawala');
  }

  function gareng(){    
    SoundPlayer.playSoundFile('suara_gareng','mp3');
    Actions.replace('gareng');
  }

  setTimeout(backSound,1000);

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../../../android/app/src/main/res/raw/bg_3.png')} style={styles.bg}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent:'center'}}>
              <View style={{ backgroundColor:'transparent', height:'25%', alignContent:'center', flex:1,flexDirection:'row'}}>
                  <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                    <Image 
                        source={require('../../../../android/app/src/main/res/raw/panakawan.png')} 
                        style={{width:310,height:77}}>
                    </Image>
                  </View>                                                                  
              </View>
              <View style={{ backgroundColor:'transparent', height:'75%', justifyContent:'center', flexDirection:'column', flex:-1}}>
                  <View style={{alignContent:'center', backgroundColor:'transparent', height:'70%'}}>
                    <ScrollView horizontal={true} pagingEnabled={false} showsHorizontalScrollIndicator={false}>
                      <TouchableOpacity onPress={semar} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/semar.png')} 
                            style={styles.boks}>
                        </Image> 
                      </TouchableOpacity>
                      <TouchableOpacity onPress={cepot} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/cepot.png')} 
                            style={styles.boks}>
                        </Image> 
                      </TouchableOpacity>
                      <TouchableOpacity onPress={dawala} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/dawala.png')} 
                            style={styles.boks}>
                        </Image> 
                      </TouchableOpacity>
                      <TouchableOpacity onPress={gareng} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/gareng.png')} 
                            style={styles.boks}>
                        </Image> 
                      </TouchableOpacity>                      
                    </ScrollView>                                                                             
                  </View>
                  <View style={{backgroundColor:'transparent', height:'30%', flex:1, flexDirection:'row', justifyContent:'center'}}>
                      <View style={{width:'50%', alignSelf:'center', alignItems:'center'}}>
                            <TouchableOpacity onPress={Actions.home}>
                                <Image 
                                    source={require('../../../../android/app/src/main/res/raw/t_home.png')} 
                                    style={{width:50,height:50}}>
                                </Image> 
                            </TouchableOpacity>
                      </View>                      
                      <View style={{width:'50%', alignSelf:'center', alignItems:'center'}}>
                            <TouchableOpacity onPress={Actions.panakawanhome}>
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
  boks: {
    width:130,
    height:'100%', 
    marginRight:20, 
    marginLeft:20
  }
});

export default PanakawanDetail;
