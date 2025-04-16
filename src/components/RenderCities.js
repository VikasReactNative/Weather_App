import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from "../util/util";
import { useDispatch } from "react-redux";
import { getForecast, getWeather } from "../reducer/ThunkAction";

export default function RenderCities({ cities,setCities }) {
    const dispatch = useDispatch();
    onSelect=(city)=>{
        setCities([]);
        dispatch({type:'CITY',payload:city});
        dispatch(getWeather(city));
        dispatch(getForecast(city));
    }
    return (<View style={styles.container}>
        <FlatList
            data={cities}
            keyboardShouldPersistTaps={'handled'}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.forecastCard} onPress={() => onSelect(item)}>
                    <Text style={styles.forecastDate}>{item.name} {item.country ? `(${item.country})` : null}</Text>
                </TouchableOpacity>
            )}
        />
    </View>)
}
const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "android" ? 80 : 130, position: 'absolute',
        width: windowWidth - 24, marginLeft: 12,
    },
    forecastCard: {
        backgroundColor: 'rgba(241, 0, 0, 0.9)', borderRadius: 15,
        padding: 15, marginBottom: 10, alignItems: 'center'
    },
    forecastDate: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
});