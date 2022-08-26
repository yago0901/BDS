import { Alert } from 'react-native';
import { 
Container, Title, CalendarioCompleto, CalendarioTopo, Dia, CalendarioCorpo 
} from './styles';

export default function Calendario() {
  return (
    <Container>
      <Title>Calendário de Batalhas </Title>
            
      <CalendarioCompleto>
        <CalendarioTopo>

          <Dia onPress={() => Alert.alert('Botão Dom precionado')}>
            Dom       
          </Dia>
          <Dia onPress={() => Alert.alert('Botão Seg precionado')}>
            Seg
          </Dia>
          <Dia onPress={() => Alert.alert('Botão Ter precionado')}>
            Ter
          </Dia>
          <Dia onPress={() => Alert.alert('Botão Qua precionado')}>
            Qua
          </Dia>
          <Dia onPress={() => Alert.alert('Botão Qui precionado')}>
            Qui
          </Dia>
          <Dia onPress={() => Alert.alert('Botão Sex precionado')}>
            Sex
          </Dia>
          <Dia onPress={() => Alert.alert('Botão Sab precionado')}>
            Sab
          </Dia>

        </CalendarioTopo>
        
        <CalendarioCorpo>

        </CalendarioCorpo>
      </CalendarioCompleto>
    </Container>
  );
}
