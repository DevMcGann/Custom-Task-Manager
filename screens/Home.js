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

   /////////////////////////////////ASYNCSTORAGE////////////////////////// 
   async componentDidMount() {
      try {
        let datos = await AsyncStorage.getItem('QUIROFANOS')
        if (datos){
          this.setState({quirofanos:JSON.parse(datos)})
        }
      } catch (error) {
        console.log(error)
      }
    }
       async componentDidUpdate() {
        try {
          if (this.state.quirofanos.length > 0){
           await  AsyncStorage.setItem('QUIROFANOS', JSON.stringify(this.state.quirofanos))
          }
        } catch (error) {
          console.log(error)
        }
      }
     
 ///////////////////////////////////////////////////////////////////     
     
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


//////////////////////////////////////////////////////////CARGAR VALORES PREDETERMINADOS (PASAR A FUNCION O ALGO)/////////////////////////////////////////////////
cargarPredef = () => {
 
let quirofanos = [
  {
      id: 1,
      nombre: "Quirofano 1"
  },

  {
      id: 2,
      nombre: "Quirofano 2"
  },

  {
      id: 3,
      nombre: "Quirofano 3"
  },

  {
      id: 4,
      nombre: "Quirofano 4"
  }
]




let tareas = [
  {
      id: 1,
      idQuirofano: 1,
      nombre: "Ampolla de propofol, atracurio (vecuronio) si pediátrico, midszolam y fentanilo",
      completa: false
  },
  {
      id: 2,
      idQuirofano: 1,
      nombre: "Bombas chequeadas y agujas en las bombas",
      completa: false
  },
  {
      id: 3,
      idQuirofano: 1,
      nombre: "Chequear anestésicos inhalatorios",
      completa: false
  },
  {
      id: 4,
      idQuirofano: 1,
      nombre: "Codo de bolsa con tubuladura conectada",
      completa: false
  },

  {
      id: 5,
      idQuirofano: 1,
      nombre: "Cánula de mayo (2 al menos)",
      completa: false
  },

  {
      id: 6,
      idQuirofano: 1,
      nombre: "Estetoscopio",
      completa: false
  },
  {
      id: 7,
      idQuirofano: 1,
      nombre: "Ketamina cargada, dos jeringas de 5 y una de 10",
      completa: false
  },
  {
      id: 8,
      idQuirofano: 1,
      nombre: "Laringoscopio y palas 3 y 4",
      completa: false
  },
  {
      id: 9,
      idQuirofano: 1,
      nombre: "Mesa de raqui armada",
      completa: false
  },

  {
      id: 10,
      idQuirofano: 1,
      nombre: "Máquina chequeada",
      completa: false
  },

  {
      id: 11,
      idQuirofano: 1,
      nombre: "Oxigeno y aire probados en mesa y panel",
      completa: false
  },
  {
      id: 12,
      idQuirofano: 1,
      nombre: "Remi en macrogotero y nora en micro",
      completa: false
  },
  {
      id: 13,
      idQuirofano: 1,
      nombre: "Succinilcolina diluida, Etilefrina, Atropina y Adrenalina en ampollas",
      completa: false
  },

  {
      id: 14,
      idQuirofano: 1,
      nombre: "Test 7, 7,5 y 8",
      completa: false
  },

  //quirofano 2
  {
      id: 15,
      idQuirofano: 2,
      nombre: "Estetoscopio",
      completa: false
  },
  {
      id: 16,
      idQuirofano: 2,
      nombre: "Guía de Eschman",
      completa: false
  },
  {
      id: 17,
      idQuirofano: 2,
      nombre: "Ketamina cargada, dos jeringas de 5 y una de 10",
      completa: false
  },
  {
      id: 18,
      idQuirofano: 2,
      nombre: "Laringoscopio y palas 2, 3 y 4",
      completa: false
  },
  {
      id: 19,
      idQuirofano: 2,
      nombre: "Mascara facial 3, 4 y 5",
      completa: false
  },
  {
      id: 20,
      idQuirofano: 2,
      nombre: "Mascara con reservorio y tubuladura",
      completa: false
  },
  {
      id: 21,
      idQuirofano: 2,
      nombre: "Mesa de raqui armada",
      completa: false
  },
  {
      id: 22,
      idQuirofano: 2,
      nombre: "Monitor en espera y probar oximetro",
      completa: false
  },
  {
      id: 23,
      idQuirofano: 2,
      nombre: "Máquina chequeada",
      completa: false
  },
  {
      id: 24,
      idQuirofano: 2,
      nombre: "Oxigeno y aire probados en mesa y panel.",
      completa: false
  },
  {
      id: 25,
      idQuirofano: 2,
      nombre: "Propofol, Atracurio, (Vecuronio si pediátrico), Midazolam y Fentanilo",
      completa: false
  },
  {
      id: 26,
      idQuirofano: 2,
      nombre: "Salbutamol en puff",
      completa: false
  },
  {
      id: 27,
      idQuirofano: 2,
      nombre: "Succinilcolina diluida, Etilefrina, Atropina y Adrenalina en ampollas",
      completa: false
  },


  //quirofano 3
  {
      id: 28,
      idQuirofano: 3,
      nombre: "Ketamina cargada, dos jeringas de 5 y una de 10",
      completa: false
  },
  {
      id: 29,
      idQuirofano: 3,
      nombre: "Laringoscopio y palas 2, 3 y 4",
      completa: false
  },
  {
      id: 30,
      idQuirofano: 3,
      nombre: "Mascara facial 3,4 y 5",
      completa: false
  },
  {
      id: 31,
      idQuirofano: 3,
      nombre: "Mascara con reservorio/tubuladura",
      completa: false
  },
  {
      id: 32,
      idQuirofano: 3,
      nombre: "Mascaras laringeas",
      completa: false
  },
  {
      id: 33,
      idQuirofano: 3,
      nombre: "Mesa de raqui armada",
      completa: false
  },
  {
      id: 34,
      idQuirofano: 3,
      nombre: "Monitor en espera y probar oximetro",
      completa: false
  },
  {
      id: 35,
      idQuirofano: 3,
      nombre: "Máquina chequeada",
      completa: false
  },
  {
      id: 36,
      idQuirofano: 3,
      nombre: "Neuroestimulador",
      completa: false
  },
  {
      id: 37,
      idQuirofano: 3,
      nombre: "Oxigeno y aire probados en  mesa y panel",
      completa: false
  },
  {
      id: 38,
      idQuirofano: 3,
      nombre: "Salbutamol en puff",
      completa: false
  },
  {
      id: 39,
      idQuirofano: 3,
      nombre: "Set de pam a mano",
      completa: false
  },
  {
      id: 40,
      idQuirofano: 3,
      nombre: "Set de via central a mano",
      completa: false
  },
  {
      id: 41,
      idQuirofano: 3,
      nombre: "Succinilcolina diluida, Etilefrina, Atropina y Adrenalina en ampollas",
      completa: false
  },
  {
      id: 42,
      idQuirofano: 3,
      nombre: "Test 6, 6,5, 7, 7,5 y 8",
      completa: false
  },


  //quirofano 4

  {
      id: 43,
      idQuirofano: 4,
      nombre: "Ketamina cargada  dos jeringas de 5 y una de 10",
      completa: false
  },
  {
      id: 44,
      idQuirofano: 4,
      nombre: "Laringoscopio y palas 2, 3 y 4",
      completa: false
  },
  {
      id: 45,
      idQuirofano: 4,
      nombre: "Mascara facial 3,4 y 5",
      completa: false
  },
  {
      id: 46,
      idQuirofano: 4,
      nombre: "Mesa de raqui armada",
      completa: false
  },
  {
      id: 47,
      idQuirofano: 4,
      nombre: "Maquina chequeada",
      completa: false
  },
  {
      id: 48,
      idQuirofano: 4,
      nombre: "Oxígeno y aire probados en mesa y panel",
      completa: false
  },
  {
      id: 49,
      idQuirofano: 4,
      nombre: "Pinza magil",
      completa: false
  },
  {
      id: 50,
      idQuirofano: 4,
      nombre: "Remi en macrogotero y nora en micro",
      completa: false
  },
  {
      id: 51,
      idQuirofano: 4,
      nombre: "Succinilcolina diluida, Etilefrina, Atropina y Adrenalina en ampollas",
      completa: false
  },
  {
      id: 52,
      idQuirofano: 4,
      nombre: "Test 7, 7,5 y 8 ",
      completa: false
  }

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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////














  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
          <Image source={ require ('../imagenes/xxz.png')} style={{height:180, width:500,  resizeMode: 'cover', flex:3}}/>
          <View style={{flexDirection:'row', justifyContent:'space-evenly', flex:1}}>
            <Text onPress={this.removeEverything} style={styles.btnBorrarTodo}>Borrar Todo </Text>
            <Text onPress={this.cargarPredef} style={styles.btnBorrarTodo}>Cargar Predef.</Text>  
          </View>
         
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex:1.3,
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
