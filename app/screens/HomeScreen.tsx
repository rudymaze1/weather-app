import { ActivityIndicator, Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppdispatch } from "../../hooks/useAppdispatch";
import { fetchweatherData } from "../store/weatherSlice";
import { setCity } from "../store/weatherSlice";
import { useCallback, useState } from "react";






const HomeScreen = () => {
    const dispatch = useAppdispatch ();
    const {data, loading, error, city} =useAppSelector ((state) => state.weather);
    const [inputCity, setInputCity] = useState(city);

    const fetchWeather = useCallback(() => {
        if (inputCity.trim()) {
            dispatch(setCity(inputCity.trim()));
            dispatch (fetchweatherData(inputCity.trim()));
        } else {
            Alert.alert('invalid input', "please enter a valid city")
        }
    }, [inputCity, dispatch]);




    return (
        <View style ={styles.container}>
            <TextInput value={inputCity} onChangeText={setInputCity} placeholder="enter city name" style={styles.inputbutton}> 
            </TextInput>
            <Button title="search" onPress={fetchWeather} />
            {
                loading ? (<ActivityIndicator size="large"  /> 

                ): error ? (
                    <Text>{error}</Text>
                ): data ? (
                    <>
                    <Text>{data.name}</Text>
                    <Text>{Math.round(data.main.temp)} °C </Text>
                    </>
                ): (<Text>enter a city and press search!!</Text>)
 
            }
        </View>
        
    );
};


const styles = StyleSheet.create({
    container : {
        flex: 1, 
        justifyContent: 'center',
        padding: 20,
    },
    inputbutton: {
        borderColor: "grey",
        borderWidth: 2, 
        padding: 10, 
        marginBottom: 20,
        width: "100%", 
    }

})

export default HomeScreen;