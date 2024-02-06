import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity, Text, Modal, TouchableHighlight, Pressable } from 'react-native';
import {Actions} from 'react-native-router-flux';
import SQLite from 'react-native-sqlite-2';
import {backsound} from './Home';
import {sound_pandawa} from './belajar/pandawa/PandawaHome';


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
  board: {
    alignSelf:'center',
    resizeMode:'cover',    
    top:10,
    width:600,
    height:350,      
  },  
  info:{         
      width:100,
      height:100,      
  },
  home:{          
    width:50,
    height:50
  },
  tombol: {
    backgroundColor: 'black',
    borderRadius: 75,
    padding: 10,
    elevation: 10,
    top:-30
  },
  textStyle: {
    color: "white",    
    textAlign: "center",
    fontFamily:'Wayang-Lima',    
    fontSize:14,
    fontWeight:'600'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,    
  },
  modalView: {
    margin: 40,
    backgroundColor: "transparent",    
    alignItems: "center",        
  },
  modalText: {
    top:-220,        
    textAlign: "center",
    fontSize:48,
    fontFamily:'Wayang-Empat'
  },
  foto:{
    width:90,
    height:90,
    top:-250,
    marginLeft:15,
    alignItems:'center'
  },
  foto1:{
    width:90,
    height:90,            
  },
  teksFoto:{
    color:'white',
    fontSize:24,
    fontFamily:'Wayang-Satu'
  }
  
});
 
class Setting extends React.Component {
  
  state = {
    modalVisible: false,
    sumber: this.props.audio || ''     
  };
  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  
 stop_music = () => {
    var suara = this.state.sumber;
    if(suara === ''){
      backsound.pause()
    }else{
      sound_pandawa.pause()
    }
  };
  
  start_music = () => {
    var suara = this.state.sumber;
    if(suara === ''){
      backsound.setVolume(.5).play()
    }else{
      sound_pandawa.play()
    }    
  };
  
  render() {    
    const { modalVisible} = this.state;    

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../android/app/src/main/res/raw/bg_1.png')} style={styles.bg}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
            <View style={{ backgroundColor:'transparent', justifyContent:'center', width:'50%'}}>
              <Text style={{alignSelf:'center', marginBottom:20, fontFamily:'Wayang-Satu', fontSize:18, left:30}}>Persembahan dari :</Text>
                <TouchableOpacity onPress={() => {
                  this.setModalVisible(!modalVisible);}} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                    <Image 
                        source={require('../../android/app/src/main/res/raw/logo_wm.png')} 
                        style={styles.info}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.pop} style={{backgroundColor:'transparent', alignSelf:'center', top:50}}>
                    <Image 
                        source={require('../../android/app/src/main/res/raw/t_return.png')}
                        style={styles.home}>
                    </Image>                  
                </TouchableOpacity>                                     
            </View>
              <View style={{ backgroundColor:'transparent', justifyContent:'center', width:'50%'}}> 
                <ImageBackground source={require('../../android/app/src/main/res/raw/daftar.png')} style={styles.bg}>                              
                <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                  <View style={{justifyContent:'center', marginRight:20}}>
                    <Text style={{fontFamily:'Wayang-Satu', fontSize:24, color:'black'}}> Sound ON</Text>
                  </View>
                  <View  style={{justifyContent:'center'}}>                    
                    <TouchableOpacity onPress={this.start_music} style={{backgroundColor:'transparent', alignSelf:'center'}} android_disableSound={true}>
                        <Image 
                            source={require('../../android/app/src/main/res/raw/t_on.png')}
                            style={{width:50, height:50}}>
                        </Image>                  
                    </TouchableOpacity>                 
                  </View>                  
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                  <View style={{justifyContent:'center', marginRight:20, top:-70}}>
                    <Text style={{fontFamily:'Wayang-Satu', fontSize:20, color:'black'}}>Sound OFF</Text>
                  </View>                                    
                  <View>
                    <TouchableOpacity onPress={this.stop_music} style={{backgroundColor:'transparent', alignSelf:'center'}}>
                        <Image 
                            source={require('../../android/app/src/main/res/raw/t_off.png')}
                            style={{width:50, height:50}}>
                        </Image>                  
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={{alignSelf:'center', top:-10, fontSize:10}}>{this.state.username}v0.9.0a</Text>  
                </ImageBackground>                                               
              </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
              <View style={styles.centeredView}>                            
                <View style={styles.modalView}>
                <Image source={require('../../android/app/src/main/res/raw/board_1.png')} style={styles.board}></Image>                  
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={styles.foto}>
                    <Image source={require('../../android/app/src/main/res/raw/septa.png')} style={styles.foto1}></Image>
                    <Text style={styles.teksFoto}>Septa</Text>
                  </View>
                  <View style={styles.foto}>
                    <Image source={require('../../android/app/src/main/res/raw/reyna.png')} style={styles.foto1}></Image>
                    <Text style={styles.teksFoto}>Reyna</Text>
                  </View>      
                  <View style={styles.foto}>
                    <Image source={require('../../android/app/src/main/res/raw/senda.png')} style={styles.foto1}></Image>
                    <Text style={styles.teksFoto}>Senda</Text>
                  </View>       
                  <View style={styles.foto}>
                    <Image source={require('../../android/app/src/main/res/raw/dhya.png')} style={styles.foto1}></Image>
                    <Text style={styles.teksFoto}>Dhya</Text>
                  </View>
                  <View style={styles.foto}>
                    <Image source={require('../../android/app/src/main/res/raw/jaya.png')} style={styles.foto1}></Image>
                    <Text style={styles.teksFoto}>Jaya</Text>
                  </View>                       
                </View>                  
                <Pressable
                    style={styles.tombol}
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                    android_disableSound={true}>
                  <Text style={styles.textStyle}>X</Text>
                </Pressable>
                </View>
              </View>                                          
          </Modal>                    
      </ImageBackground>
  </View>     
  );
  }
}

module.exports = Setting;