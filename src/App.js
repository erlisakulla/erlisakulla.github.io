import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './main/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Erlisa Kulla | Website</title>
        <meta name="description" content="Software Developer and Artist with a great passion for learning and creative exploration."/>
      </Helmet>

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