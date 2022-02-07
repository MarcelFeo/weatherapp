import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors } from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function Weatherinfo({ currentWeather }) {
    const { 
        main: { temp },
        weather: [details],
        name,
    } = currentWeather;

    const { icon, main, description } = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.weatherInfoContainer}>
        <Text style={styles.title}>{ name }</Text>
        <Image 
            style={styles.weatherIcon}
            source={{ uri: iconUrl }}
        />
        <Text style={styles.textTemp}>{ temp }°C</Text>
        <Text style={styles.weatherDescription}>{ description }</Text>
        <Text style={styles.textMain}>{ main }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    weatherInfoContainer: {
        alignItems: 'center',
    },
    weatherDescription: {
        textTransform: 'capitalize',
        marginTop: 5,
    },
    weatherIcon: {
        width: 100,
        height:100,
    },
    title: {
        fontSize: 28,
    },
    textTemp: {
        color: PRIMARY_COLOR,
        fontSize: 40,
    },
    textMain: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
    }
})
