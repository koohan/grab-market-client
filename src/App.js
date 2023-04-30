import './App.css';
import MainPageComponent from './main/index.js'; //index.js 생략해도 알아서 찾는다
import { Switch,Route,Link,useHistory } from 'react-router-dom';
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from 'antd';
import {DownloadOutlined} from '@ant-design/icons'
function App() {
  const history = useHistory();
  return (
  <div>
    <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt=""/>  
          </Link>
          <Button size="large"
          onClick={function(){
            history.push('/upload');
          }}  
          icon = {<DownloadOutlined />}
          >Product Upload</Button>
        </div>
    </div>
    <div id="body">
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
    <div id="footer"></div>
  </div>
  );
} 

export default App;
