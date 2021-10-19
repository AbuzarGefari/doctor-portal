
import './App.css';

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <AuthProvider>
  <BrowserRouter>
<Navigation></Navigation>
<Switch>
<Route exact path="/">
<Home></Home>
</Route>
<Route path="/home">
<Home></Home>
</Route>
<Route path="/services">
<Services></Services>
</Route>
<PrivateRoute path="/servicedetalis/:serviceID">
<ServiceDetails></ServiceDetails>
</PrivateRoute>
<Route path="/about">
<About></About>
</Route>
<Route path="/contact">
<Contact></Contact>
</Route>
<Route path="/login">
<Login></Login>
</Route>
<Route path="/register">
<Register></Register>
</Route>
<Route path="/footer">
<Footer></Footer>
</Route>
<Route path="*">
<NotFound></NotFound>
</Route>
</Switch>
<Footer></Footer>
  </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
