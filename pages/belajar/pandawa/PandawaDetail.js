import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity, ScrollView, Text, Pressable} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Sound from 'react-native-sound';

const s_yudistira = new Sound('suara_yudistira.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}     
});
const s_bima      = new Sound('suara_bima.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}     
});
const s_arjuna    = new Sound('suara_arjuna.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}     
});
const s_nakula    = new Sound('suara_nakula.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}     
});
const s_sadewa    = new Sound('suara_sadewa.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}     
});

const PandawaDetail: () => React$Node = () => { 
  
  function yudistira(){
    s_yudistira.play();
    Actions.replace('yudhistira');
  }

  function bima(){
    s_bima.play();
    Actions.replace('bima');
  }

  function arjuna(){
    s_arjuna.setVolume(.9).play();
    Actions.replace('arjuna');
  }

  function nakula(){
    s_nakula.setVolume(.9).play();
    Actions.replace('nakula');
  }

  function sadewa(){
    s_sadewa.setVolume(.9).play();
    Actions.replace('sadewa');
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../../../android/app/src/main/res/raw/bg_1.png')} style={styles.bg}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent:'center'}}>
              <View style={{ backgroundColor:'transparent', height:'25%', alignContent:'center', flex:1,flexDirection:'row'}}>
                  <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                    <Image 
                        source={require('../../../../android/app/src/main/res/raw/pandawa.png')} 
                        style={{width:200,height:77}}>
                    </Image>
                  </View>                                                                  
              </View>
              <View style={{ backgroundColor:'transparent', height:'75%', justifyContent:'center', flexDirection:'column', flex:-1}}>
                  <View style={{alignContent:'center', backgroundColor:'transparent', height:'70%'}}>
                    <ScrollView horizontal={true} pagingEnabled={false} showsHorizontalScrollIndicator={false}>
                      <TouchableOpacity onPress={yudistira} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/yudistira.png')} 
                            style={styles.boks}>
                        </Image> 
                      </TouchableOpacity>
                      <TouchableOpacity onPress={bima} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/bima.png')} 
                            style={styles.boks}>
                        </Image> 
                      </TouchableOpacity>
                      <TouchableOpacity onPress={arjuna} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/arjuna.png')} 
                            style={styles.boks}>
                        </Image> 
                      </TouchableOpacity>
                      <TouchableOpacity onPress={nakula} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/nakula.png')} 
                            style={styles.boks}>
                        </Image> 
                      </TouchableOpacity>
                      <TouchableOpacity onPress={sadewa} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                        <Image 
                            source={require('../../../../android/app/src/main/res/raw/sadewa.png')} 
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
                            <TouchableOpacity onPress={Actions.pandawahome}>
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

export default PandawaDetail;
