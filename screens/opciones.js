import React from 'react';
import {Text, View , TouchableOpacity, Button} from 'react-native';
import { AsyncStorage } from 'react-native';

const Opciones = ({navigation}) => {

    const {navigate} = navigation
   
    
   

    const removeEverything = async () => {
        try {
          await AsyncStorage.removeItem('QUIROFANOS')
          await AsyncStorage.removeItem('TAREAS')
          //await AsyncStorage.clear
            
          alert("Todo lo almacenado en el AsyncStorage fué eliminado!")
        } catch (e) {
            console.log(e)
            alert("Error eliminando datos")
        }
       }
      
      //////////////////////////////////////////////////////////CARGAR VALORES PREDETERMINADOS (PASAR A FUNCION O ALGO)/////////////////////////////////////////////////
      ////// Convertirlo en JSON y cargarlo desde archivo asi no queda semejante choclo acá. 
      const cargarPredef = () => {
       
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
      
       const cargarStorage = async ()  =>{
         try {
             //primero limpiamos el storage y despues volvemos a escribirlo con la data predefinida
          await AsyncStorage.removeItem('QUIROFANOS')
          await AsyncStorage.removeItem('TAREAS')
          await  AsyncStorage.setItem("QUIROFANOS", JSON.stringify(quirofanos))
          await  AsyncStorage.setItem("TAREAS", JSON.stringify(tareas))
            
          alert("Se cargaron los datos predefinidos")
          
         } catch (error) {
           alert("Hubo un error al cargar los datos predefinidos")
         }
       } 
        cargarStorage()
        
    }
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      

    return ( 
        <View style={{flex:1, padding:25}}>
            <Text style={{textAlign:'center', marginBottom:15, marginTop:8, fontSize:20, fontWeight:'bold'}}>Opciones</Text>
            <View style={{flex:1}}>
                <View style={{marginBottom:25}}>
                    <Button title="Cargar datos predefinidos" onPress={cargarPredef} />
                    <Text style={{textAlign:'center', marginTop:10}}>Carga los datos que la aplicación tiene como predefinidos por el cliente.</Text>
                </View>
                <View>
                    <Button title="Eliminar todos los datos" onPress={removeEverything}/>
                    <Text style={{textAlign:'center', marginTop:10}}>Elimina todos los datos del Storage del dispositivo.  Puede volver a cargar los predeterminados.</Text>
                </View>
            </View>

            <View style={{flex:.4}}>
                <Button title="Sobre el Desarrollador" onPress = { () => navigate( 'desarrollador')}/>
                <Text style={{textAlign:'center', marginTop:10}}>Información del Desarrollador de la aplicación para contactar en caso de necesitar cambios</Text>
            </View>
        </View>
     );
}
 
export default Opciones;