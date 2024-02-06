import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity, ScrollView, Text, Pressable} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {backsound} from '../../Home';


const Kurawa: () => React$Node = () => {  
  function video_play(){
    Actions.videopandawa();
    backsound.pause();
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../../../android/app/src/main/res/raw/bg_2.png')} style={styles.bg}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent:'center'}}>
              <View style={{ backgroundColor:'transparent', height:'20%', justifyContent:'center', alignContent:'center'}}>
                <TouchableOpacity onPress={Actions.kurawahome} style={{backgroundColor:'transparent', alignSelf:'center', left:-300, top:30}}>
                    <Image 
                        source={require('../../../../android/app/src/main/res/raw/t_return.png')} 
                        style={{width:50,height:50}}>
                    </Image> 
                </TouchableOpacity>
                <Image 
                    source={require('../../../../android/app/src/main/res/raw/kurawa.png')} 
                    style={styles.header}>
                </Image>                
              </View>
              <View style={{ backgroundColor:'transparent', height:'80%', justifyContent:'center'}}>
                <Image source={require('../../../../android/app/src/main/res/raw/board_1.png')} style={styles.board}></Image>
                <ScrollView style={styles.scrollView}>
                  <Text style={styles.text}>Kurawa merupakan sebutan untuk anak Prabu Destarata bersama Dewi Ghandari. Ayah kurawa ini merupakan kaka dari Prabu Pandu. Dengan begitu Kurawa merupakan saudara sepupu Pandawa. Kurawa berjumlah 100, dan 1 diantaranya adalah perempuan. Semasa kecil mereka tinggal di negara Astina bersama Pandawa. Dalam kisah Mahabharata Kurawa adalah tokoh Antagonis atau tokoh jahat yang selalu berselisih dengan Pandawa. Dalam aplikasi ini kita tidak menceritakan keseluruhan Kurawa, namun tokoh yang kita bahas akan mewakili Kuwara. Yang akan diceritakan kali ini Duryudhana, Dursasana, Citraksi dan Citrayuda. Yuk kita ulas satu persatu.</Text>                  
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
    width:180,
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
    marginVertical:65,
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

export default Kurawa;
