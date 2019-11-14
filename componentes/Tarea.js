import React from 'react'
import {  Text, View, TouchableOpacity } from 'react-native';

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
        <View  style={{ backgroundColor:  tarea.completa ? "green" : "red" }}>
                <Text> {tarea.nombre}</Text>
                <View >
                    
                    {tarea.completa ? 
                    (<TouchableOpacity> <Text onPress={cambiarEstado}> Completa </Text> </TouchableOpacity>)
                     : 
                     (<TouchableOpacity> <Text onPress={cambiarEstado}> Incompleta </Text> </TouchableOpacity>)
                    }

                    <i className="fas fa-trash" onPress={clickEliminar}></i>
                </View>
                           
        </View>
    );
}
 
export default Tarea;