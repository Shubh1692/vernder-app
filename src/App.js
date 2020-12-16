import logo from "./logo.svg";
import "./App.css";
import DefaultLayout from "./Container/DefaultLayout";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Helper/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DefaultLayout />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
