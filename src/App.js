import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './main/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

/*

TODO
Fix router problem for deployment

*/

function App() {
  return (
    <>
      <Navbar/>

      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>

      <Footer/>
    </>
  );
}

export default App;