import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import MainUser from './components/MainUser';
import FormAdd from './containers/FormAdd';

const store = createStore(rootReducer, applyMiddleware(thunk))
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainUser />} />
          <Route path='/FormAdd' element={<FormAdd />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
