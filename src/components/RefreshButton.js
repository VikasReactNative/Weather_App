import { Image, TouchableOpacity } from "react-native";
import { centerStyle, imgHW } from "../util/AppStyles";
import { colors } from "../util/Colors";
import { useDispatch, useSelector } from "react-redux";
import { getForecast, getWeather } from "../reducer/ThunkAction";

export default function RefreshButton() {
    const {currentCity}=useSelector(s=>s.AuthReducer)
    const dispatch=useDispatch()
    function onRefresh() {
        dispatch(getWeather(currentCity));
        dispatch(getForecast(currentCity));
    }
    return (
        <TouchableOpacity onPress={()=>onRefresh()}
        style={{
            position: "absolute",
            right: 24,
            bottom: 24,
            backgroundColor: colors.white,
            ...imgHW(50),
            ...centerStyle,
            borderRadius: 25
        }}>
            <Image source={require('../assets/refresh.png')} style={imgHW(25)} />
        </TouchableOpacity>
    )
}