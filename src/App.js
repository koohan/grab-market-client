import './App.css';
import MainPageComponent from './main/index.js'; //index.js 생략해도 알아서 찾는다
import { Switch,Route } from 'react-router-dom';
import UploadPage from "./upload";
import ProductPage from "./product";


function App() {
  return (
  <div>
    <Switch>
      <Route exact={true} path="/">
        <MainPageComponent />
      </Route>
      <Route exact={true} path="/products/:id">
        <ProductPage />
      </Route>
      <Route exact={true} path="/upload">
        <UploadPage />
      </Route>  
    </Switch>
  </div>
  );
} 

export default App;
