import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

class Home extends Component {
  
    state=({
        nombres:[{id:1 , nombre:"something"}, {id:2, nombre:"something else"}]
    })

    sayHello = (data) => {
      alert(data)
    }

    componentDidMount() {
     this.props.navigation.setParams({ saludar: this.saludar });
    }
  render() {
    return (
      <View>
        <Text> Home </Text>
        <Button 
          title="Go To Profile"
          onPress={
            () => this.props.navigation.navigate( 'SecondScreen', 
              {nombres:this.state.nombres, sayHello:this.sayHello} )
          }
        />
      </View>
    );
  }
}

export default Home;
