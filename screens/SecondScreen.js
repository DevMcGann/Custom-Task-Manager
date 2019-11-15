import React, { Component } from 'react';
import { View, Text , Button, TouchableOpacity,TextInput} from 'react-native';
import uuid from 'uuid';
import Tarea from '../componentes/Tarea';

class SecondScreen extends Component {
  
  state = {
    tareasArray:[],
    tareaNueva:{ nombre: ""},
    quirofanoClicado:this.props.navigation.getParam('quirofano')
  }
  
  /////////////////// ASYNCSTORAGE /////////////////////
  async componentDidMount() {
    try {
      let datos = await AsyncStorage.getItem('TAREAS')
      if (datos){
        this.setState({tareasArray:JSON.parse(datos)})
      }
    } catch (error) {
      console.log(error)
    }
  }
     async componentDidUpdate() {
      try {
        if (this.state.tareasArray.length > 0){
         await  AsyncStorage.setItem('TAREAS', JSON.stringify(this.state.tareasArray))
        }
      } catch (error) {
        console.log(error)
      }
    }
  

/////////////////////////////////////////////////////
salvarDatos = async (datos) => {
  try {
    await AsyncStorage.setItem('TAREAS', JSON.stringify(datos))

  } catch (error) {
    console.log(error)
  }
}

  
//////////////////////////Formulario///////////////////////////
handleSubmit = e => {
  const tarea = {
      id:uuid(),
      idQuirofano: this.state.quirofanoClicado.id,
      nombre:this.state.tareaNueva.nombre,
      completa:false
  }
  
  this.salvarDatos(tarea)
  this.setState({tareasArray:[...this.state.tareasArray, tarea]})   
  alert(JSON.stringify(this.state.tareasArray))
}

handleChange = nombre => {
  this.setState({
      tareaNueva:{nombre:nombre}
  })
 }

///////////////////////////////////////////////////////

eliminarTarea = id => {
  const nuevasTareas = [...this.state.tareasArray];
  var newArray = nuevasTareas.filter(function (tar) {
      return tar.id !== id 
    });
    this.setState( { tareasArray:newArray})
}

todasIncompletas= e=> {    // filtrar por idquirofano antes y despues si cambiar en el array
  const copiaArray = [...this.state.tareasArray]
  copiaArray.forEach(tarea => (tarea.completa = false))
  this.setState({ tareasArray:copiaArray})
}

cambiarEstadoTarea = (tarea,index) => {
  const tareaModificada = tarea
  const indiceOriginal = index
  const copiaArray = [...this.state.tareasArray]
  var newArray = copiaArray.filter(function (tar) {
      return tar.id !== tarea.id 
  });
  newArray.splice(indiceOriginal,0, tareaModificada)
  this.setState({ tareasArray:newArray});
}




////////////////////////////////////////////////RENDER//////////////////////////////
  render() {    
    return (
      <View>
          <View>
            <Text> {this.state.quirofanoClicado.nombre} </Text>
            <Button 
              title="Volver a Quirófanos"
              onPress={
                () => {
                  this.props.navigation.navigate("Home");
                  //pressHello("Hello!")
                  }
              }
            />
          </View>

          <View>
            <TextInput type="text" placeholder="Nueva Tarea" 
              onChangeText={(nombre) => this.handleChange(nombre)} required
              value={this.state.tareaNueva.nombre}
              name="nombre"
            />
            <Button onPress={this.handleSubmit} title="Agregar Tarea"/>  
            <TouchableOpacity onPress={this.todasIncompletas}><Text> Marcar todas Incompletas</Text></TouchableOpacity>
          </View>

            {!this.state.tareasArray.length ? (<Text>No hay tareas</Text>) : (
                  <View>    
                      {this.state.tareasArray.map((tarea,index) => tarea.idQuirofano === this.state.quirofanoClicado.id ? (
                          <Tarea 
                              key={index}
                              tarea={tarea}
                              id={tarea.id}
                              eliminarTarea={this.eliminarTarea}
                              cambiarEstadoTarea={this.cambiarEstadoTarea} 
                              index={index}
                              
                              />
                          ):(null)
                          )}
                  
                  </View>
              )}


      </View>
    );
  }
}

export default SecondScreen;
