import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import Routes from "./routes";
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import { rrfProps, store } from "./firebase";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <div className="App">
          <Router>
            <Routes />
          </Router>
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
