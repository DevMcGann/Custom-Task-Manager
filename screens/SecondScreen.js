import React, { Component } from 'react';
import { View, Text , Button} from 'react-native';

class SecondScreen extends Component {
  
    state = {};
  
  
  render() {
    const usuario = this.props.navigation.getParam('nombres')
    const pressHello = this.props.navigation.getParam('sayHello')
    
    return (
      <View>
        <Text> {usuario[1].nombre} </Text>
        <Button 
          title="Go back to  Home"
          onPress={
            () => {
              this.props.navigation.navigate("Home");
              pressHello("Hello!")
              }
           //()=>  this.props.navigation.navigate( 'Home' ) , passHello("Hello!")
           
          }
        />
      </View>
    );
  }
}

export default SecondScreen;
