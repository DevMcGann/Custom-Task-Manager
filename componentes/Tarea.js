import React from 'react'
import {  Text, View, TouchableOpacity,Button } from 'react-native';

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
                <View>
                    
                    {tarea.completa ? 
                    (<TouchableOpacity onPress={cambiarEstado}>
                         <Text> Completa</Text>
                    </TouchableOpacity>)
                     : 
                     (<TouchableOpacity onPress={cambiarEstado}> 
                         <Text> Incompleta</Text> 
                     </TouchableOpacity>)
                    }

                    <Button onPress={clickEliminar} title="Eliminar"/>  
                </View>
                           
        </View>
    );
}
 
export default Tarea;