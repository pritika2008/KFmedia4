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

export default class ContactsScreen extends Component {
  constructor() {
    super();
    this.state = {
      contactIDs: "",
      numberOfContacts: "",
      contactProfileImage: "",
      contactFriend: "",
      contactFamily: "",
      password: ""
      
    };
  }
  contacts = ({}) =>{
    return (
      <ListItem
        key={index}
        leftElement={<Icon name="body-outline" type="font-awesome" color ='#696969'/>}
        title={contactIDs}
        titleStyle={styles.contactList}
        subtitle={numberOfContacts}
        bottomDivider
      />
    )
}

  

}
const styles = StyleSheet.create({
    contactList:{
        color: 'black',
        fontWeight: 'bold'
      }
});
