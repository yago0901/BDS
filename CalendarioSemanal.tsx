import React, { useEffect, useState } from 'react';
import { View, Text } from './components/Themed';
import { StyleSheet } from 'react-native';
import { addDays, format, getDate, startOfWeek } from 'date-fns';

type Props = {
  date: Date;
}

const CalendarioSemanal: React.FC<Props> = ({date}) => {

  const [week, setWeek] = useState<WeekDay[]>([]);

  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
  }, [date]); 

  return (
    <View style={styles.container} >
      {week.map((weekDay) => {
        return (
          <View key={weekDay.formatted}>
            <Text style={styles.weekDayText}>{weekDay.formatted}</Text>
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
  },
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