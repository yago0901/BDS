import { Button, StyleSheet, Alert } from 'react-native';

import { Text, View, } from '../components/Themed';

export default function Calendario() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendário de Batalhas</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <View style={styles.calentotal}>
        <View style={styles.calentop} >

          <Text style={styles.dia} onPress={() => Alert.alert('Botão Dom precionado')}>
            Dom       
          </Text>
          <Text style={styles.dia} onPress={() => Alert.alert('Botão Seg precionado')}>
            Seg
          </Text>
          <Text style={styles.dia} onPress={() => Alert.alert('Botão Ter precionado')}>
            Ter
          </Text>
          <Text style={styles.dia} onPress={() => Alert.alert('Botão Qua precionado')}>
            Qua
          </Text>
          <Text style={styles.dia} onPress={() => Alert.alert('Botão Qui precionado')}>
            Qui
          </Text>
          <Text style={styles.dia} onPress={() => Alert.alert('Botão Sex precionado')}>
            Sex
          </Text>
          <Text style={styles.dia} onPress={() => Alert.alert('Botão Sab precionado')}>
            Sab
          </Text>
        </View>
        
        <View style={styles.calenhead} >

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  calentop: {
    flexDirection: "row",
    height: '4%',
    width: '80%',
        
  },
  dia: {
    flex: 1,
    textAlign: 'center',

  },
  calentotal: {
    borderWidth: 2,
    borderColor: "#1b58e9",
    borderRadius: 6,
    height: '80%',
    backgroundColor: 'transparent',
  },
  calenhead: {
    backgroundColor: "#1b58e9",
    flex: 1,   
  },
  
});
