import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    StatusBar,
  } from 'react-native';
import {Actions} from 'react-native-router-flux';
import SQLite from 'react-native-sqlite-2';

import Logo from '../../android/app/src/main/res/raw/logo_wm.png';

  const check = () => {
    const db = SQLite.openDatabase("dataOffline.db", "1.0", "", 1);
    db.transaction(function (txn) {        
      txn.executeSql(
          "CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30), password VARCHAR(30))",
          []
      );
      txn.executeSql("SELECT * FROM `users`", [], function (tx, res) {        
        var i = res.rows.length;
        if(i === 0){
          Actions.replace('home');
        }else{
          Actions.replace('menu');
        }
      });
    });
  }

const Loading: () => React$Node = () => {                
  setTimeout(check, 1000);    

    
    return (        
        <View style={styles.container}>
            <StatusBar hidden></StatusBar>            
            <Image source={Logo} style={styles.logoPic}></Image>                      
            <Text style={styles.logoText}>Loading...</Text>
        </View>    
    );
  };

  const styles = StyleSheet.create({  
    container: {
        flex:1,
        backgroundColor: '#2C9EE8',
        justifyContent:'center',
    },    
    logoText:{
        color:'#000',        
        fontSize:40,
        marginTop:29.1,
        fontWeight:'600',
        alignSelf:'center',
        fontFamily:'Wayang-Empat',
    },
    logoPic: {     
        alignSelf:'center',               
        width:200,
        height:200,          
      },
  });
export default Loading;