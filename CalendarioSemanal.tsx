import React, { useEffect, useState } from 'react';
import { View, Text } from './components/Themed';
import { StyleSheet, TouchableOpacity, Modal, Pressable, Alert } from 'react-native';
import { addDays, format, getDate, startOfWeek, isSameDay } from 'date-fns';
import pt from 'date-fns/locale/pt';

type Props = {
  date: Date;
  onChange: (valuer: Date) => void;
}

const CalendarioSemanal: React.FC<Props> = ({date, onChange}) => {

  const [week, setWeek] = useState<WeekDay[]>([]);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
  }, [date]); 

  return (
    <View style={styles.container} >
      {week.map((weekDay) => {
        const textStyles = [styles.label];
        const touchable = [styles.touchable];

        const sameDay = isSameDay(weekDay.date, date);
        if (sameDay) {
          textStyles.push(styles.selectedLabel);
          touchable.push(styles.selectedTouchable);
        }

        return (
          <View style={styles.weekDayItem} key={weekDay.formatted}>
            <Text style={styles.weekDayText}>{weekDay.formatted}</Text>
            <TouchableOpacity onPress={() => {onChange(weekDay.date); setModalVisible(true)}} style={styles.touchable}>
              <Text style={textStyles}>{weekDay.day}</Text>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Modal aberto!</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Fechar modal.</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  weekDayText: {
    color: 'gray',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  label: {
    fontSize: 14,
    color:'white',
    textAlign: 'center',
  },
  selectedLabel: {
    backgroundColor: 'green',
    borderRadius: 20,
  },
  touchable: {
    padding: 7.5,
    width: 35,
    height: 35,
  },
  selectedTouchable: {
    color: 'green',
  },
  weekDayItem: {
    alignItems: 'center',
  },
  centeredView: {
    alignItems: "center",
    marginTop: 222
  },
  modalView: {
    margin: 20,
    height: "85%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    elevation: 5    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "black",
  }
});

type WeekDay = {
  formatted: string;
  date: Date;
  day: number;
}

export const getWeekDays = (date: Date): WeekDay[] => {
  const start = startOfWeek(date, {weekStartsOn: 1});

  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, 'EEE', { locale: pt }),
      date,
      day: getDate(date),
    });
  }

  return final;
};

export default CalendarioSemanal;