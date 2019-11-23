import React from 'react';
import {Text, View , Linking,TouchableOpacity, Image, Dimensions} from 'react-native';


const Desarrollador = () => {

    const anchoDispositivo = Math.round(Dimensions.get('window').width);

    const verInstagram = () => {
        Linking.openURL('https://www.instagram.com/dev.mcgann/');
    }
    const verFacebook = () => {
        Linking.openURL('https://www.facebook.com/gsoft.dev.1')
    }
    const verWeb = () => {
        Linking.openURL('https://devmcgann.pythonanywhere.com/')
    }

    return ( 
        <View style={{flex:1}}>
            <View style={{flex: 1, borderWidth:5}}>
                <Image source={require ('../imagenes/gsoft.jpg')} style={{height:350, width:anchoDispositivo, justifyContent:'center', alignSelf:'center'}} /> 
            </View>

            <View style={{flex: 1, justifyContent:'center', alignContent:'center', padding:15}}>
                <TouchableOpacity style={{flexDirection:'row', alignSelf:'center', marginBottom:15, }}>
                     <Image source={require ('../imagenes/whatsapp.png')} style={{height:20, width:20, flex:.2}} /> 
                     <Text style={{flex:1, textAlign:'center'}}>2477 15-354411</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:'row', alignSelf:'center', marginBottom:15}} onPress={verInstagram}>
                     <Image source={require ('../imagenes/instagram.png')} style={{height:20, width:20, flex:.2}} /> 
                     <Text style={{flex:1, textAlign:'center'}}>dev.mcgann</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:'row',alignSelf:'center', marginBottom:15}} onPress={verFacebook}>
                     <Image source={require ('../imagenes/facebook.png')} style={{height:20, width:20, flex:.2}} /> 
                     <Text style={{flex:1, textAlign:'center'}}>Dev G-Soft</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={verWeb} style={{ marginTop:20}}>
                    <Text style={{alignSelf:'center', marginTop:30, fontWeight:'bold', fontSize:20, color:'blue', justifyContent:'center'}}>devmcgann.pythonanywhere.com</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 /*Porque no incluyo links en los botones de redes sociales??  Proximamente */
export default Desarrollador;