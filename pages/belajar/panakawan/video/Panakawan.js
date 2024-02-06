import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import VideoPlayer from 'react-native-video-player';
import {backsound} from '../../../Home';

const VideoPandawa: () => React$Node = () => {   
  
  function kembali(){
      Actions.pop();
      backsound.setNumberOfLoops(-1).setVolume(.5).play();
  }
      
  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../../../../android/app/src/main/res/raw/background.jpg')} style={styles.bg}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent:'center'}}>              
              <View style={{ backgroundColor:'transparent', height:'80%', justifyContent:'center'}}>
                    <VideoPlayer
                        // video={require('../../../../../android/app/src/main/res/raw/yudhistira.mp4')}
                        video={{ uri: 'https://download.isbi.ac.id/wayang/pandawa.mp4'}}
                        videoWidth={650}
                        videoHeight={250}
                        autoplay={true}
                        pauseOnPress={true}
                        resizeMode={'cover'}                        
                        disableControlsAutoHide={true}                                                                                           
                    />                    
              </View>   
              <View style={{ backgroundColor:'transparent', height:'20%', justifyContent:'center'}}>
                <TouchableOpacity onPress={kembali} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                    <Image 
                        source={require('../../../../../android/app/src/main/res/raw/t_kembali.png')} 
                        style={{width:50,height:50}}>
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
