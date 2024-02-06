import React, {Component} from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import VideoPlayer from 'react-native-video-player';
// import {backsound} from '../../../Home';
import {sound_pandawa} from '../PandawaHome';

const url = 'https://download.isbi.ac.id/wayang/pilot.mp4'

const VideoPandawa: () => React$Node = () => {   
  
  sound_pandawa.pause();
  function kembali(){
      Actions.pop();
      sound_pandawa.setNumberOfLoops(-1).setVolume(.5).play();
  }
      
  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../../../../android/app/src/main/res/raw/bg_2.png')} style={styles.bg}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent:'center', backgroundColor:'black'}}>                             
              <View style={{ backgroundColor:'transparent', height:'85%', justifyContent:'center'}}>
                    <VideoPlayer
                        video={{ uri: 'https://whyme.id/video/pandawa.mp4'}}                                                
                        // source={{ uri: 'https://download.isbi.ac.id/wayang/pilot.mp4'}}  
                        // video={require('../../../../../android/app/src/main/res/raw/video.mp4')}  
                        videoWidth={650}
                        videoHeight={300}
                        autoplay={true}
                        pauseOnPress={true}                        
                        resizeMode={'cover'}                                               
                        disableControlsAutoHide={true}                        
                    />
              </View>
              <View style={{ backgroundColor:'transparent', height:'15%', position:'absolute', top:20, left:20}}>
                <TouchableOpacity onPress={kembali} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                    <Image 
                        source={require('../../../../../android/app/src/main/res/raw/t_return.png')} 
                        style={{width:30,height:30}}>
                    </Image> 
                </TouchableOpacity>                
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
  });

export default VideoPandawa;
