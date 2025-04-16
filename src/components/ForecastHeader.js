import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../util/Colors";

export default function ForecastHeader({ item }) {
    const { count } = useSelector(s => s.AuthReducer)
    return (<View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 12 }}>
        <Text style={{ color:colors.white, fontSize: 18 }}>{`${count}-Days Forecasts`}</Text>
    </View>)
}