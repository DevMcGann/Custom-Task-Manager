import React from 'react'
import {  Text, View,Button,StyleSheet } from 'react-native';
// { ScrollView } from 'react-native-gesture-handler';

const Tarea = ({tarea,eliminarTarea, cambiarEstadoTarea, index }) => {


    const clickEliminar = e => {
        eliminarTarea(tarea.id)
    }

    const cambiarEstado = e => {
        if (tarea.completa === false){
            tarea.completa = true
        }else{
            tarea.completa = false
        }
        cambiarEstadoTarea(tarea, index)
    }

    return (  

      
        <View  style={{ backgroundColor:  tarea.completa ? "green" : "red" , flex:1,  justifyContent:'space-between', marginBottom:15, alignSelf: "stretch", borderWidth:2}}>
                
                <View style={{flex:.5}}>
                   <Text style={{textAlign:'center', marginBottom:16, marginTop:8, color:'white', fontWeight:'bold', alignSelf: "stretch"}}> {tarea.nombre}</Text>
                </View>


                <View style={{flex:.3, flexDirection:'row', alignItems:'flex-end', justifyContent: 'space-evenly', marginBottom:10 }}>    
                    {tarea.completa ? 
                    (<Button title="Completa" onPress={cambiarEstado} style={{marginTop: 15}}/>)
                     : 
                     (<Button title="Incompleta" onPress={cambiarEstado} style={{marginTop: 15}}/>)
                    }

                    <Button onPress={clickEliminar} title="Eliminar"/>  
                </View>
                           
        </View>
  
    );
}
 
export default Tarea;



