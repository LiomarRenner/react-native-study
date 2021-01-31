import React, { Component } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  TextInput,
  
} from 'react-native';

import Perfil from './Perfil';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {nome:"", idade:0, email:"",};    
  }


  render() {
    
    return (
      <View style = {styles.container}>
	      <Text style = {styles.headerText}>
	        Precisamos dos seus dados, é rapidinho :)
	      </Text>

	      <TextInput
	        style = {styles.textInput}
          keyboardType="default"
	        onChangeText = {(nome) => {this.setState ({nome})}}
	        placeholder = "Digite o nome"
	      />

        <TextInput
	        style = {styles.textInput}
          keyboardType="numeric"
	        onChangeText = {(idade) => {this.setState ({idade})}}
	        placeholder = "Digite a idade"
	      />

        <TextInput
	        style = {styles.textInput}
          keyboardType="email-address"
	        onChangeText = {(email) => {this.setState ({email})}}
	        placeholder = "Digite o email"
	      />

        <View style={styles.viewButton}>
	        <Button
	          title = "Ok"
            onPress = {Perfil}
	        />
        </View>

        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container:{
	  flex: 1, 
	  justifyContent:"center",
	  alignltems:"center",
	  backgroundColor:"#f5e5e5",
   },

  headerText:{
	 fontSize:20,
   color: "darkblue",
	 textAlign:"center",
	 margin:10,
 	 fontWeight:"bold"
  },

  textInput:{
	  height:45,
	  weidth:"95%",
	  borderColor:"gray",
	  borderWidth:3,
    marginBottom: 20,
	  paddingLeft:20
  },
  viewButton:{
	  width:"93%",
	  margin:15,
    marginBottom: 20,
    fontSize: 20,
	  //backgroundColor:"red"
  }
});