import styled from 'styled-components/native';

export const Container = styled.View`
margin-bottom: 5px;
padding: 10px;
box-shadow: 2px 2px rgba(0,0,0,0.40);
background-color: rgba(0,0,0,0.02);
`;

export const IconView = styled.View`
flex-direction: row;
background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#009301'};
width: 25%;
border-radius: 5px;
padding: 7px;
justify-content: space-around;
`;

export const TipoText = styled.Text`
color: #fff;
font-weight: bold;
`;

export const ValorText = styled.Text`
font-size: 25px;
font-weight: bold;
color: #222;
`;
