import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";


import db from "../config";
import firebase from "firebase";

import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

export default class ReportScreen extends Component {
  constructor() {
    super();
    this.state = {
      contactIDs: "",
      reasonWhy:"",
      
      password: ""
      
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.showModal()}
        <View
          style={{ flex: 0.25}}
        >
        <View style={{flex:0.15}}/>
        
        </View>
        <View style={{ flex: 0.45 }}>

          <View style={styles.TextInput}>
          <TextInput
            style={styles.loginBox}
            placeholder="user Name"
            placeholderTextColor="gray"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
          <TextInput
            style={[styles.loginBox,{marginTop:RFValue(15)}]}
            secureTextEntry={true}
            placeholder="Enter your Password"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          </View>
          <View style={{flex:0.5,  alignItems:"center",}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
                Alert.alert("we will see to this as soon as we can thanks for submitting");
            }}
          >
            <Text style={styles.buttonText}>submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ isModalVisible: true })}
          >
            <Text style={styles.buttonText}>cancel</Text>
          </TouchableOpacity>

          </View>
        </View>

        <View
          style={{ flex: 0.3}}
        >
        
        </View>
      </View>
    );
  }
}

  


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6fc0b8",
    },
    loginBox: {
        width: "80%",
        height: RFValue(50),
        borderWidth: 1.5,
        borderColor: "#ffffff",
        fontSize: RFValue(20),
        paddingLeft: RFValue(10),
    },
    button: {
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom:RFValue(10),
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
      },
      buttonText: {
        color: "#32867d",
        fontWeight: "200",
        fontSize: RFValue(20),
      },
});
