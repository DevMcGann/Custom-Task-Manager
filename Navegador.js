
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import SecondScreen from './screens/SecondScreen';
import Opciones from './screens/opciones';
import Desarrollador from './screens/desarrollador';



const NavStack = createStackNavigator({
    Home: { 
        screen: Home,
    },
    SecondScreen: { 
        screen: SecondScreen,
    },
    opciones: {
        screen: Opciones,
        
    },
    desarrollador: {
        screen: Desarrollador,
    }
});

const Navegador = createAppContainer(NavStack);

export default Navegador;
