import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import WeatherSearch from "./src/components/weaterSearch";
import WeatherInfo from "./src/components/weaterInfo";
import axios from "axios";
import { BASE_URL, API_KEY } from "./src/constans";
import { useState } from "react";

export default function App() {
  const [weatherData, setWeatherData] = useState();
  const [status, setStatus] = useState();

  const handleSearch = async (location) => {
    setStatus("loading");
    try {
      const res = await axios.get(`${BASE_URL}?q=${location}&appid=${API_KEY}`);
      const data = res.data;
      data.visibility /= 1000;
      data.visibility = data.visibility.toFixed(2);
      data.main.temp -= 273.15;
      data.main.temp = data.main.temp.toFixed(2);

      setWeatherData(data);
    } catch (error) {
      setStatus("error");
      console.error("error catch:", error);
    } finally {
      setStatus("success");
    }
  };

  const renderComponent = () => {
    switch (status) {
      case "loading":
        return <ActivityIndicator size={"large"} />;
      case "success":
        return (
          <WeatherInfo
            name={weatherData?.name}
            temp={weatherData?.main?.temp}
            weatherDesc={weatherData?.weather[0]?.description}
            icon={weatherData?.weather[0]?.icon}
            visibility={weatherData?.visibility}
            windSpeed={weatherData?.wind.speed}
          />
        );
      case "error":
        return (
          <Text style={{ marginTop: 42 }}>
            Something went wrong. Please try again with a correct city name.
          </Text>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WeatherSearch searchWeather={handleSearch} />
      {renderComponent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});