import logo from "./logo.svg";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
function App() {
	return (
		<Router>
			<Header/>
			<Switch>
				<PrivateRoute exact path="/" component={Dashboard} />
				<Route path="/signup" component={SignUp} />
				<Route path="/signin" component={SignIn} />
				<Route path="/forgot-password" component={ForgotPassword} />
			</Switch>
			<Footer/>
		</Router>
	);
}

export default App;
