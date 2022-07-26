import React from 'react';
import { View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';//outra forma de importar os icones

import { useNavigation } from '@react-navigation/native';

import {Container, ButtonMenu} from './styles'


export default function Header() {

    const navigation = useNavigation();

 return (
   <Container>
       <ButtonMenu onPress={()=> navigation.toggleDrawer()}>
           <Ionicons name='menu-outline' color='#fff' size={40}/>
       </ButtonMenu>
   </Container>
  );
}