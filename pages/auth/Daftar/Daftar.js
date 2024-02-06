import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native'

import SQLite from 'react-native-sqlite-2'

const database_name = 'dataOffline.db'
const database_version = '1.0'
const database_displayname = 'SQLite Test Database'
const database_size = 200000
let db

export default class ReactNativeSQLite2Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: []
    }
  }

   

  runDemo() {
    const db = SQLite.openDatabase("dataOffline.db", "1.0", "", 1);
    db.transaction(function (txn) {
    // txn.executeSql("DROP TABLE IF EXISTS users", []);
    // txn.executeSql(
    //     "CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))",
    //     []
    // );
    // txn.executeSql("INSERT INTO Users (name) VALUES (:name)", ["nora"]);
    txn.executeSql("INSERT INTO Users (name) VALUES (:name)", ["jiraiya"]);
    txn.executeSql("SELECT * FROM `users`", [], function (tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
        console.log("item:", res.rows.item(i));
        }
    });
    });
  }

  

  render() {
    const { progress } = this.state
    return (
      <SafeAreaView style={styles.mainContainer}>
        <TouchableOpacity style={styles.toolbar} onPress={() => this.runDemo()}>
          <Text style={styles.toolbarButton}>Run Demo</Text>
        </TouchableOpacity>
        <FlatList
          data={progress}
          renderItem={this.renderProgressEntry}
          style={listStyles.liContainer}
        />
      </SafeAreaView>
    )
  }
}

var listStyles = StyleSheet.create({
  li: {
    borderBottomColor: '#c8c7cc',
    borderBottomWidth: 0.5,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15
  },
  liContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: 15
  },
  liIndent: {
    flex: 1
  },
  liText: {
    color: '#333',
    fontSize: 17,
    fontWeight: '400',
    marginBottom: -3.5,
    marginTop: -3.5
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  toolbar: {
    backgroundColor: '#51c04d',
    flexDirection: 'row',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolbarButton: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContainer: {
    flex: 1
  }
})