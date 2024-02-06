import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, TouchableOpacity, ScrollView, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Sound from 'react-native-sound';
import {backsound} from '../Home';
import {back_sound} from '../Menu';

const narasi_sejarah = new Sound('audio_sejarah_wayang.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {}      
});


const Sejarah: () => React$Node = () => {  
  function kembali(){
    narasi_sejarah.stop();
    Actions.replace('belajar');
    backsound.setVolume(.5);
  }
  backsound.setVolume(.1);
  back_sound.setVolume(.1);
  narasi_sejarah.play(()=>narasi_sejarah.release());
  return (
    <View style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ImageBackground source={require('../../../android/app/src/main/res/raw/bg_2.png')} style={styles.bg}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent:'center'}}>              
              <View style={{ backgroundColor:'transparent', height:'80%', justifyContent:'center'}}>
                <Image source={require('../../../android/app/src/main/res/raw/board_1.png')} style={styles.board}></Image>
                <ScrollView style={styles.scrollView}>
                  <Text style={styles.text}>Wayang merupakan salah satu kebudayaan yang tersebar di Nusantara. Sejak tahun 2003, wayang diakui oleh UNESCO (United Nations Educational, Scientific and Curtural) sebagai warisan kebudayaan dunia dari Indonesia. </Text>
                  <Text style={styles.text}>Ada banyak hal yang menarik dari wayang, seperti bentuk pertunjukannya, karakteristik wayangnya, bahasa dan sastranya, musikalitasnya dan masih banyak lagi. Wayang juga dikategorikan sebagai seni adiluhung yakni memiliki nilai yang tinggi. Di Indonesia terdapat beberapa jenis wayang yang terkenal diantaranya wayang golek, wayang kulit, wayang beber, wayang cepak dan lain sebagainya. Yang akan kita pelajari kali ini yaitu wayang golek, wayang yang berasal dari Jawa Barat.</Text>
                  <Text style={styles.text}>Yang membedakan wayang golek dengan wayang yang lain adalah bentuk wayangnya, dimana bentuk wayang golek terbuat dari kayu. Bahasa yang digunakan juga disesuaikan dengan daerah perkembangannya yakni menggunakan bahasa Sunda. Cerita Wayang Golek tidak berbeda dengan Wayang lainnya, cerita yang dihadirkan dalam pagelaran Wayang Golek diambil dari cerita Mahabrata dan Ramayana. Dalam cerita Mahabrata mengajarkan kita tentang nilai-nilai kemanusiaan, kebaikan, kebodohan, keserakahan, kesalahpahaman dan kepahlawanan yang akan senantiasa terjadi pada umat manusia. Pandawa dan Kurawa merupakan sebagian kecil tokoh pada cerita Mahabrata.</Text>
                </ScrollView>
              </View>
              <View style={{ backgroundColor:'transparent', height:'20%', justifyContent:'center'}}>
                <TouchableOpacity onPress={kembali} style={{backgroundColor:'transparent', alignSelf:'center', top:-10}}>
                    <Image source={require('../../../android/app/src/main/res/raw/t_return.png')} style={styles.back}></Image> 
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
  sejarah: {
    alignSelf:'center',
    top:20,
  },  
  board: {
    alignSelf:'center',
    position:'absolute',
    width:'65%',
    height:'97.5%',
    opacity:1        
  },
  back: {          
    width:50,
    height:50
  },
  scrollView: {
    backgroundColor: 'transparent',    
    marginVertical:60,
    left:2,
    alignSelf:'center',
    width:'60%'
  },
  text: {    
    fontSize: 20,
    fontWeight:'500',
    color:'white',
    fontFamily:'Wayang-Satu',
    textAlign:'center'
  },
});

export default Sejarah;
