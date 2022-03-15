import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Component/About/About";
import AllCountry from "./Component/AllCountry/AllCountry";
import Contact from "./Component/Contact/Contact";
import CountryDetail from "./Component/CountryDetail/CountryDetail";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import NotFound from "./Component/NotFound/NotFound";
import { CountriesContext } from "./CountriesContext";

const App = () => {
	const [allCountry, setAllCountry] = useState([]);
	
	const countrySortByName= (arr) =>  arr.sort(function(a, b){
		const nameA = a.name.common.toLowerCase();
		const nameB = b.name.common.toLowerCase();
		if (nameA < nameB) //sort string ascending
		 return -1;
		if (nameA > nameB)
		 return 1;
		return 0; //default return value (no sorting)
	 });

	useEffect(() => {
		loadData();
	}, []);
	const loadData = async () => {
		let countries = sessionStorage.getItem("countries");
		if (countries) {
			setAllCountry(countrySortByName(JSON.parse(countries)))
		} else {
			const response = await axios.get("https://restcountries.com/v3.1/all");
			setAllCountry(countrySortByName(response.data))
			sessionStorage.setItem("countries", JSON.stringify(response.data));
		}
	};
	return (
		<>
			<Router>
				<CountriesContext.Provider value={{ allCountry }}>
					<Header></Header>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/countries" component={AllCountry} />
						<Route
							exact
							path="/countries/:countryName"
							component={CountryDetail}
						/>
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="*" component={NotFound} />
					</Switch>
					<Footer></Footer>
				</CountriesContext.Provider>
			</Router>
		</>
	);
};

export default App;
