
import { Provider } from "react-redux";
import store, { persistor } from "./src/reducer/index.js";
import { PersistGate } from "redux-persist/integration/react";
import RootNavigation from "./src/Navigation/RootNavigation.js";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate
          persistor={persistor}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
