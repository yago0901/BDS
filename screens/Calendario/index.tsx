import { Button, StyleSheet } from 'react-native';
import { 
Container, Title, CalendarioCompleto, CalendarioTopo, CalendarioCorpo,
TitleCalendario, Descricao, Informacao, Texto
} from './styles';
import CalendarioSemanal from '../../CalendarioSemanal'
import { useState } from 'react';

type Props = {
  date: Date;
}

const Calendario: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Container style={styles.safe}>
      <Title>Calendário de Batalhas </Title>
      <CalendarioSemanal date={date} onChange={ (newDate) => setDate(newDate) } />
      
    </Container>
  );
}


const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default Calendario;

/*<CalendarioCorpo>
          
          <TitleCalendario>
            Horário e Localização
          </TitleCalendario>

          <Descricao>
            <Informacao>
              Aqui você pode encontrar horário e localização de diversas Batalhas de RAP.
            </Informacao>
          </Descricao>
          
        </CalendarioCorpo>*/