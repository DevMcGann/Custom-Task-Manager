import React, { Component } from 'react';
import { View, Text , Button, TouchableOpacity,TextInput,StyleSheet} from 'react-native';
import { AsyncStorage } from 'react-native';
import uuid from 'uuid';
import Tarea from '../componentes/Tarea';
import { ScrollView } from 'react-native-gesture-handler';

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
    //alert("salvar datos" + JSON.stringify(datos))
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
  this.setState({tareaNueva:{nombre:""}}) 
 // alert(JSON.stringify(this.state.tareasArray))
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
      <ScrollView>
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{color:'white', fontSize:35, flex:1, marginBottom:6,fontWeight:'bold'}}> {this.state.quirofanoClicado.nombre} </Text>
            <TouchableOpacity onPress={this.todasIncompletas}><Text style={{marginBottom:12, color:'white'}}> Marcar todas Incompletas</Text></TouchableOpacity>
          </View>

          <View style={styles.formulario}>
            <TextInput type="text" placeholder="Nueva Tarea" 
              onChangeText={(nombre) => this.handleChange(nombre)} required
              value={this.state.tareaNueva.nombre}
              name="nombre"
              style={styles.input}
            />
            <Button onPress={this.handleSubmit} title="Agregar Tarea" style={styles.btnAgregar}/>  
            
          </View>

            {!this.state.tareasArray.length ? (<Text>No hay tareas</Text>) : (
              <ScrollView>
                  <View style={styles.tareas}>     
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
              </ScrollView>
              )}


      </View>
      </ScrollView>
    );
  }
}

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  header: {
    backgroundColor:"green",
    flex:.6,
    justifyContent:'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',

  },
//////////////////////////formulario
  formulario:{
    flex: .3,
    flexDirection:'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent:'space-between',
    backgroundColor:'white',
    marginTop:15,
    marginRight:5

  },

  //formulario -> input + boton
  input:{
    backgroundColor:'orange',
    flex:2,
    marginLeft:8,
    marginRight:8,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent:'center',
    textAlign:'center',
    color:'white',
    fontSize:22,
    fontStyle:'italic',
    borderWidth:1

  },

  btnAgregar:{
    flex:1,
    marginLeft:8,
    marginRight:8,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent:'center',
    textAlign:'center',
  },

/////////////////////////////////////////////

  tareas:{
    flex:2,
    alignSelf: 'stretch',
    alignItems:'stretch',
    justifyContent:'flex-start',
    padding:10,
    //backgroundColor:'yellow',
    marginTop:20,
    width: 400
  }

 
});
