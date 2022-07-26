import React from 'react';
//import { createNativeDraweravigator } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

const AppStack = createDrawerNavigator();

function AppRoutes(){
    return(

    

    <AppStack.Navigator
    drawerContent={(props) => <CustomDrawer {...props}/>}
    drawerStyle={{
        backgroundColor: '#171717'
    }}
    drawerContentOptions={{
        labelStyle:{
            fontWeigth: 'bold'
        },
        activeTintColor: '#fff',
        activeBackgroundColor: '#00b94a',
        inactiveBackgroundColor: '#000',
        inactiveTintColor: '#ddd',
        itemStyle:{
            marginVertical: 5,
        }
    }}
    >
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Registrar" component={New} />
        <AppStack.Screen name="Perfil" component={Profile} />
    </AppStack.Navigator>
    );
}

export default AppRoutes;
