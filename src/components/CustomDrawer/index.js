import React, {useContext} from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {

const {user, signOut} = useContext(AuthContext);

 return (
   <DrawerContentScrollView {...props}>
       <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25,}}>
           <Image
           source={require('../../assets/Logo.png')}
           style={{width: 85, height: 85}}
           resizeMode='contain'
           />

           <Text style={{color: '#fff', fontSize: 18, marginTop: 5}}>
               Bem-vindo(a)
           </Text>
           <Text style={{color: '#fff', fontSize: 20, paddingBottom: 35, fontWeight:'bold'}}>
               {user && user.nome}
           </Text>
       </View>
       
       <View style={{width: '100%', height: 1, backgroundColor: '#e6e6e6', marginBottom: 35}}></View>

    <DrawerItemList {...props} />

    <DrawerItem {...props} 
    label='Sair do app'
    onPress={ () => {signOut()}}

    style={{backgroundColor:'#c62c36'}}
    />

   </DrawerContentScrollView>
  );
}