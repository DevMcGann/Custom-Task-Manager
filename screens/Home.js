import React, { Component } from 'react';
import { View, Text,Button, StyleSheet, Image,ScrollView } from 'react-native';
import { AsyncStorage } from 'react-native';
import NuevoQuirofano from '../componentes/NuevoQuirofano';
import ListaQuirofanos from '../componentes/ListaQuirofanos';

class Home extends Component {
  
  state = { 
    quirofanos: [],
    clicada: {}
   }


    sayHello = (data) => {
      alert(data)
    }

    async componentDidMount() {
      try {
        let datos = await AsyncStorage.getItem('QUIROFANOS')
        if (datos){
          //alert(datos)
          this.setState({quirofanos:JSON.parse(datos)})
        }
      } catch (error) {
        console.log(error)
      }
     
     this.props.navigation.setParams({ saludar: this.saludar });
    }


    async componentDidUpdate(){
      try {
        if (this.state.quirofanos.length > 0){
          await AsyncStorage.setItem('QUIROFANOS', JSON.stringify(this.state.quirofanos))
        }
      } catch (error) {
        console.log(error)
      }
    }

    salvarDatos = async (datos) => {
      try {
        await AsyncStorage.setItem('QUIROFANOS', JSON.stringify(datos))

      } catch (error) {
        console.log(error)
      }
    }
 
    removeEverything = async () => {
     try {
       await AsyncStorage.removeItem('QUIROFANOS')
       await AsyncStorage.removeItem('TAREAS')
       alert("Todo lo almacenado en el AsyncStorage fué eliminado!")
       this.setState({quirofanos:[]})
     } catch (e) {
         console.log(e)
         alert("Error eliminando datos")
     }
    }


     //callback function que recibe parametro de NuevoQuirofano.js
  crearQuirofano = quirofano => {
    this.setState({quirofanos:[...this.state.quirofanos, quirofano]})
    this.salvarDatos(this.state.quirofanos)
    }

  //eliminar tareas relacionadas a la persona eliminada
eliminar_Tareas_Relacionadas = async id => {
  try {
    let tareas = await  JSON.parse(AsyncStorage.getItem('TAREAS'))
    if (tareas){
      let tareas_filtradas = tareas.filter( function (tarea){
        return tarea.idQuirofano !== id
    });
    await AsyncStorage.setItem('TAREAS', JSON.stringify(tareas_filtradas))
    }
  } catch (error) {
    console.log(error)
  }

 }

eliminarQuirofano =  id => {
    this.eliminar_Tareas_Relacionadas(id)
   const quirofanosActuales =[...this.state.quirofanos];
   const filtradas =  quirofanosActuales.filter(q => q.id !== id )
   this.setState( {quirofanos : filtradas } )
}

//para VentanaQuirofano
quirofanoClicado = clicado => {
 this.setState ( { clicada : clicado })
}

cargarPredef = () => {
 let quirofanos=[
   {id: 1,
   nombre:"Quirofano 1"},

   {id: 2, 
   nombre : "Quirofano 2"}
 ]

 let tareas = [
   {id: 1,
   idQuirofano: 1,
   nombre:"Aprender React Native",
   completa:false},
   {id: 2,
     idQuirofano: 1,
     nombre:"Aprender también Android Studio",
     completa:false},
   {id: 3,
     idQuirofano: 1,
     nombre:"Debugear esto",
     completa:false},
     {id: 4,
       idQuirofano: 2,
       nombre:"Lavar la mesa de operaciones",
       completa:false},
     {id: 5,
       idQuirofano: 2,
       nombre:"Cambiar el foquito del baño",
       completa:false}
 ]

 cargarStorage = async ()  =>{
   try {
    await  AsyncStorage.setItem("QUIROFANOS", JSON.stringify(quirofanos))
    await  AsyncStorage.setItem("TAREAS", JSON.stringify(tareas))
    const ListaQuirofanos = await AsyncStorage.getItem('QUIROFANOS'); 
    this.setState({
        personas : [ListaQuirofanos]
    })
    
    alert("Se cargaron los dato predefinidos")
   } catch (error) {
     alert("Hubo un error al cargar los datos predefinidos")
   }
 } 
 cargarStorage()
  
}


  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
          <Image source={ require ('../imagenes/xxz.png')} style={{height:150, width:500,  resizeMode: 'cover', flex:2}}/>
          <Text onPress={this.removeEverything} style={styles.btnBorrarTodo}>Borrar todo Storage (esconder este boton)</Text>
          <Text onPress={this.cargarPredef} style={styles.btnBorrarTodo}>Cargar</Text>  
      </View>
      <View style={styles.nuevoQuirofano}>
        <NuevoQuirofano
          crearQuirofano = { this.crearQuirofano}
        />
      </View>
        <View style={styles.listaQuirofanos}>
          <ScrollView>
            <ListaQuirofanos
              quirofanos={this.state.quirofanos}
              eliminarQuirofano={this.eliminarQuirofano}
              quirofanoClicado = {this.quirofanoClicado}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex:1,
    marginTop:25,
    //backgroundColor: "blue"
  },
  btnBorrarTodo:{
    alignSelf: 'center',
    flex:.2,
    justifyContent: 'center',
    marginTop:5,
    backgroundColor:"red",
    padding:5,
    color:"white" 
  },
  nuevoQuirofano:{
    flex:.2,
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
