import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import uuid from 'uuid';
import Tarea from './Tarea';
import { AsyncStorage } from 'react-native';


class VentanaQuirofano extends Component {
    state = {
        tareasArray:[],
        tareaNueva:{ nombre: ""},
        quirofanoClicado:this.props.clicada
      }

/////////////////// ASYNCSTORAGE /////////////////////
componentDidMount(){this.cargarDatos}   //cada vez q se monta, carga el state con el contenido del Storage
   componentDidUpdate(){this.guardarDatos} //cada vez que el componente actualiza, guarda la info en el Storage

   cargarDatos = async () => {
      try {
        const ListaTareas = await  AsyncStorage.getItem('TAREAS');
        if(ListaTareas) {
          this.setState({
           tareasArray : JSON.parse(ListaTareas)
          })
        }
      } catch (error) {
        console.log(error)
      }
   }

   guardarDatos = async () => {
     try {
      await AsyncStorage.setItem('TAREAS', JSON.stringify(this.state.tareasArray));
     } catch (error) {
       console.log(error)
     }
   } 

/////////////////////////////////////////////////////


 //////////////////////////Formulario///////////////////////////
 handleSubmit = e => {
    const tarea = {
        id:uuid(),
        idQuirofano: this.state.quirofanoClicado.id,
        nombre:this.state.tareaNueva.nombre,
        completa:false
    }
    this.setState({tareasArray:[...this.state.tareasArray, tarea]})   
   
}

handleChange = e => {
  this.setState({
    tareaNueva:{
      ...this.state.tareaNueva.nombre,
      [e.target.name] : e.target.value
  }})
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




////////////////////////// RENDER  ////////////////////////
    render() { 
      const { navigate } = this.props.navigation
        return ( 
    
        <View>
            <Text>{this.state.quirofanoClicado.nombre}</Text>

            <View>
                    <TextInput type="text" placeholder="Nueva Tarea" 
                        onChangeText={this.handleChange} required
                        value={this.state.tareaNueva.nombre}
                        name="nombre"
                    />
                    <TouchableOpacity onPress={this.handleSubmit}><Text> + </Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.todasIncompletas}><Text> Marcar todas Incompletas</Text></TouchableOpacity>
            </View>

            {!this.state.tareasArray.length ? (<p>No hay tareas</p>) : (
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
 
export default VentanaQuirofano;