import React, { Component } from 'react';
import { View, Text,Button, StyleSheet, Image,ScrollView } from 'react-native';
import { AsyncStorage, ImageBackground } from 'react-native';
import NuevoQuirofano from '../componentes/NuevoQuirofano';
import ListaQuirofanos from '../componentes/ListaQuirofanos';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';

class Home extends Component {
  
  state = { 
    quirofanos: [],
    clicada: {}
   }

   /////////////////////////////////ASYNCSTORAGE////////////////////////// 
  async componentDidMount() {

    try {
     this.didFocusSubscription()
      let datos = await AsyncStorage.getItem('QUIROFANOS')
      if (datos) {
        this.setState({ quirofanos: JSON.parse(datos) })
      }
    } catch (error) {
      console.log(error)
    }
  }

  async componentDidUpdate() {
    try {
      if (this.state.quirofanos.length ) {
        await AsyncStorage.setItem('QUIROFANOS', JSON.stringify(this.state.quirofanos))
        
      }else{  //si no hay quirofanos eliminamos todo
         await AsyncStorage.removeItem('QUIROFANOS');
         await AsyncStorage.removeItem('TAREAS')
      }
    } catch (error) {
      console.log(error)
    }
  }

   didFocusSubscription= () => this.props.navigation.addListener(
    'didFocus',
    payload => {
      //alert("didfocus guacho");
      //this.forceUpdate()
    }
  );

 ///////////////////////////////////////////////////////////////////     
    


  salvarDatos = async (datos) => {
    try {
      await AsyncStorage.setItem('QUIROFANOS', JSON.stringify(datos))

    } catch (error) {
      console.log(error)
    }
  }

     //callback function que recibe parametro de NuevoQuirofano.js
  crearQuirofano = quirofano => {
    this.setState({quirofanos:[...this.state.quirofanos, quirofano]})
    this.salvarDatos(this.state.quirofanos)
    }


  eliminarQuirofano = id => {
    const quirofanosActuales = [...this.state.quirofanos];
    const filtradas = quirofanosActuales.filter(q => q.id !== id)
    this.setState({ quirofanos: filtradas })
    this.eliminar_Tareas_Relacionadas(id)
    
  }
  //eliminar tareas relacionadas a la persona eliminada
  eliminar_Tareas_Relacionadas = async id => {
    try {
      let tareas = await AsyncStorage.getItem('TAREAS')
      tareasParseadas = JSON.parse(tareas)
      if (tareasParseadas) {
        let tareas_filtradas = tareasParseadas.filter(function (tarea) {
          return tarea.idQuirofano !== id
        });
        await AsyncStorage.setItem('TAREAS', JSON.stringify(tareas_filtradas))
      }
    } catch (error) {
      console.log(error)
    }

  }

//para VentanaQuirofano (SecondScreen)
quirofanoClicado = clicado => {
 this.setState ( { clicada : clicado })
}





/////////////////////////////////////////////////////////////////////////////////////////////////////RENDER/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////RENDER/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////RENDER/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////RENDER/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////RENDER/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////RENDER/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////RENDER/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////RENDER/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////RENDER/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////RENDER/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////RENDER/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////RENDER/////////////////////////////////////////////////////////////////////////////////////


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            resizeMode={'stretch'}
            style={{ flex: 1, height: 250, width: 400 }}
            source={require('../imagenes/xxz.png')}
          />
          <View>
            <TouchableOpacity  //navegando...
              onPress={() => this.props.navigation.navigate('opciones', { forzarUpdate: this.forzarUpdate })}
            >
              <Image source={require('../imagenes/opciones_2.png')} style={{
                padding: 10, height: 50, width: 50, alignSelf: 'flex-start', justifyContent: 'flex-end', marginBottom: 255,
                marginLeft: 8
              }} />
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.nuevoQuirofano}>
          <NuevoQuirofano
            crearQuirofano={this.crearQuirofano}
          />
        </View>
        <View style={styles.listaQuirofanos}>
          <ScrollView>
            <ListaQuirofanos
              quirofanos={this.state.quirofanos}
              eliminarQuirofano={this.eliminarQuirofano}
              quirofanoClicado={this.quirofanoClicado}
              eliminar_Tareas_Relacionadas={this.eliminar_Tareas_Relacionadas}
              navigation={this.props.navigation}

            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Home;


/*

<View>
  <Text> Home </Text>
  <Button 
      title="Go To Profile"
      onPress={
        () => this.props.navigation.navigate( 'SecondScreen', 
        {nombres:this.state.nombres, sayHello:this.sayHello} )
       }
   />
</View>*/



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex:1.6,
    marginTop:1,
    marginBottom:10
    //backgroundColor: "blue"
  },
  nuevoQuirofano:{
    flex:.3,
    backgroundColor:"green",
    alignSelf: 'stretch',
    marginTop:5,
    marginBottom:5
  },
  listaQuirofanos:{
    flex:2,
    //backgroundColor:"orange",
    alignSelf: 'stretch',
    
  }
});
