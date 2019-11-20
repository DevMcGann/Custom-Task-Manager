import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import uuid from 'uuid';

class NuevaPersona extends Component {
    state = {  quirofano: {nombre:""} }

    handleChange = nombre => {
        this.setState({
            quirofano:{nombre:nombre}
        })
       }
    
       handleSubmit = () => {
         const newQuirofano = {...this.state.quirofano};
         newQuirofano.id = uuid();
         this.props.crearQuirofano(newQuirofano)
         this.setState({
            quirofano:{nombre:""}
        })
         
       }
    
    render() { 
        return (  
            <View className="formulario" style={styles.formulario}>
             
                <TextInput type="text" placeholder="Agregar Quirófano" name="nombre" value={this.state.quirofano.nombre}
                 onChangeText={(nombre) => this.handleChange(nombre)} style={styles.input}/>
                <TouchableOpacity onPress={this.handleSubmit} style={styles.boton} >
                    <Text style={{fontSize:20}}>+</Text>
                </TouchableOpacity>  
    
            </View>
        );
    }
}
 

export default NuevaPersona;

const styles = StyleSheet.create({
    formulario: {
        flex:1,
        flexDirection:"row",
        borderWidth:1,
    },
    input:{
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        textAlign:"center",
        borderBottomColor:"#7FFF00",
        fontSize:20,
        color:"white",
        //borderBottomWidth:2,
        marginLeft:4
        
    },
    boton:{
        alignItems: 'center',
        justifyContent: 'center',
        flex:.2,
        borderBottomWidth:2,
        borderTopWidth:2,
        borderLeftWidth:2,
        borderRightWidth:2,
        borderColor:"orange",
        borderRadius:12,
        backgroundColor:"#7FFF00",
        marginRight:5,
        marginLeft:5
    }
});