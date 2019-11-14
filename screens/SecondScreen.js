import React, { Component } from 'react';
import { View, Text , Button} from 'react-native';

class SecondScreen extends Component {
  
  state = {
    tareasArray:[],
    tareaNueva:{ nombre: ""},
    quirofanoClicado:this.props.clicada
  }
  
  componentDidMount() {
    let q = this.props.navigation.getParam('ElQuirofano')
    alert (q)
  }
  
  render() {
    //const usuario = this.props.navigation.getParam('nombres')
    //const pressHello = this.props.navigation.getParam('sayHello')
    //const quirofano = this.props.navigation.getParam(quirofano)
    //alert(quirofano)
   // const { navigate } = this.props.navigation
    
    return (
      <View>
        <Text> G </Text>
        <Button 
          title="Go back to  Home"
          onPress={
            () => {
              this.props.navigation.navigate("Home");
              //pressHello("Hello!")
              }
          }
        />
      </View>
    );
  }
}

export default SecondScreen;
