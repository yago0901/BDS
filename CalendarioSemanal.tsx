import React, { useEffect, useState } from 'react';
import { View, Text } from './components/Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { addDays, format, getDate, startOfWeek, isSameDay } from 'date-fns';

type Props = {
  date: Date;
  onChange: (valuer: Date) => void;
}

const CalendarioSemanal: React.FC<Props> = ({date, onChange}) => {

  const [week, setWeek] = useState<WeekDay[]>([]);

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
            <TouchableOpacity onPress={() => onChange(weekDay.date)} style={styles.touchable}>
              <Text style={textStyles}>{weekDay.day}</Text>
            </TouchableOpacity>
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
      formatted: format(date, 'EEE'),
      date,
      day: getDate(date),
    });
  }

  return final;
};

export default CalendarioSemanal;