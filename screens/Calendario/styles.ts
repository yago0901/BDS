import styled from 'styled-components/native';

export const Container = styled.View`
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

export const Dia = styled.Text`
flex: 1;
text-align: center;
color: white;
margin-top: 5px;
border-radius: 12px;
`;

export const CalendarioCorpo = styled.View`
background-color: #1b58e9;
height: 90%;
border-width: 2px;
border-radius: 6px;
`;
