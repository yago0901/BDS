import { Alert } from 'react-native';
import { 
Container, Title, CalendarioCompleto, CalendarioTopo, CalendarioCorpo,
TitleCalendario, Descricao, Informacao, Texto
} from './styles';
import CalendarioSemanal from '../../CalendarioSemanal'

type Props = {
  date: Date;
}

export default function Calendario() {
  const date = new Date();

  return (
    <Container>
      <Title>Calendário de Batalhas </Title>
            
      <CalendarioCompleto>
        <CalendarioTopo>
          
          <CalendarioSemanal date={date} />
          
        </CalendarioTopo>

        <CalendarioCorpo>
          
          <TitleCalendario>
            Horário e Localização
          </TitleCalendario>

          <Descricao>
            <Informacao>
              Aqui você pode encontrar horário e localização de diversas Batalhas de RAP.
            </Informacao>
          </Descricao>
          
        </CalendarioCorpo>
      </CalendarioCompleto>
    </Container>
  );
}
