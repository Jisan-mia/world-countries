import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Component/About/About";
import AllCountry from "./Component/AllCountry/AllCountry";
import Contact from "./Component/Contact/Contact";
import CountryDetail from "./Component/CountryDetail/CountryDetail";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import NotFound from "./Component/NotFound/NotFound";
const App = () => {
	return (
		<>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/countries" component={AllCountry} />
					<Route exact path="/country/:countryName" component={CountryDetail} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="*" component={NotFound} />
				</Switch>
				<Footer></Footer>
			</Router>
		</>
	);
};

export default App;
