import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import WeatherDetails from "../screens/WeatherDetails";
const Stack = createStackNavigator();
export default function RootNavigation(){
    return(
<Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="WeatherDetails" component={WeatherDetails} />
    </Stack.Navigator>
    )
}