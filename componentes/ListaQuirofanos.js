import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Quirofano from './Quirofano';

const ListaQuirofanos = ({quirofanos, eliminarQuirofano,quirofanoClicado,eliminar_Tareas_Relacionadas,navigation}) => {
    const mensaje = Object.keys(quirofanos).length === 0 ? 'No hay Quirófanos' : null
    return ( 
    <React.Fragment>
        {<Text style={{textAlign:'center', marginTop:20, fontSize:25}}>{mensaje}</Text>}
        {quirofanos.map (q => (
            <Quirofano
                key={q.id}
                quirofano={q}
                eliminarQuirofano={eliminarQuirofano}
                quirofanoClicado = {quirofanoClicado}
                eliminar_Tareas_Relacionadas={eliminar_Tareas_Relacionadas}
                navigation={navigation}
            />
        ))}
    </React.Fragment>
     );
}
 
export default ListaQuirofanos;




  