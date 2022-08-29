import styled from 'styled-components/native';

export const Container = styled.View`
width: 100%;
height: 100%;
flex: 1;
align-items: center;
`;

export const Title = styled.Text`
margin-top: 20px;
margin-bottom: 20px;
font-size: 20px;
font-weight: bold;
color: white;
`;

export const CalendarioCompleto = styled.View`
border-width: 2px;
border-color: #1b58e9;
border-radius: 6px;
height: 80%;
width: 80%;
background-color: transparent;
`;

export const CalendarioTopo = styled.View`
height: 10%;
width: 100%;
flex-Direction: row;
`;

export const CalendarioCorpo = styled.View`
background-color: #1b58e9; 
height: 90%;
border-width: 2px;
border-radius: 6px;

`;

export const TitleCalendario = styled.Text`
margin-top: 20px;
margin-bottom: 20px;
font-size: 15px;
font-weight: bold;
color: white;
text-align: center;
background-color: transparent;
`;

export const Descricao = styled.View`
height: 88%;
border-width: 2px;
border-radius: 6px;
background-color: white;
justify-content: flex-end;
`;

export const Informacao = styled.Text`
color: black;
text-align: center;
`;

export const Texto = styled.Text`
color: white;
text-align: center;
`;
