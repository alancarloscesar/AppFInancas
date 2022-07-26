import React from 'react';
import { View,Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import {Container, IconView, TipoText, ValorText} from './styles'


export default function HistoricoList({data, deleteItem}) {
 return (
     <TouchableWithoutFeedback onLongPress={() => {deleteItem(data)}}>
        <Container>
        {console.log(data)}
            <IconView tipo={data.tipo}>
                <Icon 
                name={data.tipo === 'receita' ? 'arrow-up' : 'arrow-down'} 
                color="#fff" 
                size={20}/>
                <TipoText>{data.tipo}</TipoText>
            </IconView>
        <ValorText>R$ {data.valor}</ValorText>
        </Container>
    </TouchableWithoutFeedback>
  );
}