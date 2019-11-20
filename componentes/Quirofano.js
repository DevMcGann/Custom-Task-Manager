import React from 'react'
import {Text, View , TouchableOpacity,StyleSheet, Image} from 'react-native';


const Quirofano = ({quirofano,eliminarQuirofano,quirofanoClicado,navigation}) => {

    const {navigate} = navigation
    

    const eliminar = () =>{
        eliminarQuirofano(quirofano.id)
    }

    const handleClick = () => {
        quirofanoClicado(quirofano); //devolver callback a App
        navigate("SecondScreen", {quirofano: quirofano, quirofanoClicado:quirofanoClicado});
    }

  /*  <Button 
    title="Go To Profile"
    onPress={
      () => this.props.navigation.navigate( 'SecondScreen', 
      {nombres:this.state.nombres, sayHello:this.sayHello} )
     }
 />*/

    return (  
        <View style={styles.quirofano}>
            
            <TouchableOpacity style={styles.nombre}>
                <Text onPress={handleClick} style={{ fontSize:30, textAlign:'center', fontWeight:'bold', color:'white',alignSelf: 'center',
                justifyContent: 'center', padding:10}}>
                    {quirofano.nombre}
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={eliminar} style={styles.eliminarQuirofano}>
                <Image source={require ('../imagenes/delete-photo.png')} style={{padding:10,height:50, width:50, alignSelf:'center', justifyContent:'flex-end'}}  /> 
            </TouchableOpacity>
        </View>
    );
}
 
export default Quirofano;


const styles = StyleSheet.create({
    quirofano: {
        flex:1,
        flexDirection:'row',
        backgroundColor:"green",
        marginTop:20,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
        borderRadius:30,
        justifyContent:"space-around",
        borderWidth:0
        
    },
    nombre:{
        flex:1,
    },
    eliminarQuirofano:{
        flex:.3,
        justifyContent:"flex-end",
        backgroundColor:"red",
        borderWidth:3
    }
})