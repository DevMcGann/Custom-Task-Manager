
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import SecondScreen from './screens/SecondScreen';


const NavStack = createStackNavigator({
    Home: { 
        screen: Home,
    },
    SecondScreen: { 
        screen: SecondScreen,
    },
});

const Navegador = createAppContainer(NavStack);

export default Navegador;
