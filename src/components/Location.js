import { Text } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../util/Colors";

export default function Location() {
        const { currentCity } = useSelector(s => s.AuthReducer);
    return (
        <Text style={[{ fontSize: 18, color:colors.white, marginBottom: 10 ,textAlign: 'center' }]}>{currentCity?.name}{'\n'}{currentCity.country ? `(${currentCity.country})` : null}</Text>
    )
}