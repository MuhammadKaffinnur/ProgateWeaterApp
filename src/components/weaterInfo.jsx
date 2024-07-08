import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const WeatherInfo = ({
  temp,
  weatherDesc,
  visibility,
  windSpeed,
  name,
  icon,
}) => {
  return (
    <View style={styles.marginTop20}>
      <Text style={styles.text}>The weather of {name}</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>{temp} C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image
          source={{ uri: `https://openweathermap.org/img/w/${icon}.png` }}
          style={styles.weatherIcon}
        />
        <Text style={[styles.text, styles.bold]}>Clouds </Text>
        <Text style={styles.text}>{weatherDesc}</Text>
      </View>

      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility </Text>
        <Text style={[styles.text, styles.marginLeft15]}>{visibility} Km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed </Text>
        <Text style={[styles.text, styles.marginLeft15]}>{windSpeed} m/s</Text>
      </View>
    </View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLef: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  bold: {
    fontWeight: 700,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontWeight: "700",
    fontSize: 80,
    textAlign: "center",
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});
