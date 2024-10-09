import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/configureStore";
import AppRoutes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
