import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';

var lebar = Dimensions.get('window').width;

const Belajar: () => React$Node = () => {  
  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../../android/app/src/main/res/raw/bg_1.png')} style={styles.bg}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent:'center'}}>
              <View style={{ backgroundColor:'transparent', height:'50%', justifyContent:'center', flex:1, flexDirection:'row'}}>
                <View style={{backgroundColor:'transparent', width:'50%', justifyContent:'center'}}>
                  <Image source={require('../../../android/app/src/main/res/raw/mengenal_wayang.png')} style={styles.sejarah}></Image> 
                </View>
                <View style={{backgroundColor:'transparent', width:'50%', justifyContent:'center'}}>
                  <TouchableOpacity onPress={Actions.sejarah} style={{backgroundColor:'transparent', justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
                      <Image 
                          source={require('../../../android/app/src/main/res/raw/t_sejarah.png')}
                          style={{width:250, height:'78%'}}>
                      </Image>                  
                  </TouchableOpacity>
                </View>                 
              </View>
              <View style={{ backgroundColor:'transparent', height:'30%', justifyContent:'center'}}>                
                  <View style={{flex:1, flexDirection:'row', backgroundColor:'transparent', justifyContent:'center', top:20}}>
                        <View style={{backgroundColor:'transparent', justifyContent:'center'}}>
                          <TouchableOpacity onPress={Actions.pandawahome} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                              <Image 
                                  source={require('../../../android/app/src/main/res/raw/t_pandawa.png')} 
                                  style={{width:230,height:80}}>
                              </Image>                                               
                            </View>                                                
                          </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'transparent', justifyContent:'center', marginLeft:10, marginRight:10}}>
                          <TouchableOpacity onPress={Actions.panakawanhome} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                          <View style={{flexDirection:'row', alignItems:'center'}}>
                              <Image 
                                  source={require('../../../android/app/src/main/res/raw/t_panakawan.png')}
                                  style={{width:230, height:80}}>
                              </Image>
                            </View>                                                                              
                          </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'transparent', justifyContent:'center'}}>
                          <TouchableOpacity onPress={Actions.kurawahome} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                              <Image 
                                  source={require('../../../android/app/src/main/res/raw/t_kurawa.png')}
                                  style={{width:230, height:80}}>
                              </Image>                                                
                            </View>                                                   
                          </TouchableOpacity>
                        </View>
                  </View>                
              </View>
              <View style={{ backgroundColor:'transparent', height:'20%', alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={Actions.menu} style={{backgroundColor:'transparent'}}>
                    <Image source={require('../../../android/app/src/main/res/raw/t_return.png')} style={{width:50, height:50}}></Image> 
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
  games: {
    alignSelf:'center',
    // left:70,        
    top:50,
    width:200,
    height:120  
  },
  sejarah: {
    alignSelf:'center',    
    width:300,
    height:150
  }  
});

export default Belajar;
