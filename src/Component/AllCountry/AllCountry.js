import axios from "axios";
import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./AllCountry.css";
const AllCountry = () => {
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		const result = countries.filter(
			(country) =>
				country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				country.alpha2Code.toLowerCase().includes(searchTerm.toLowerCase()) ||
				country.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
				country.capital.toLowerCase().includes(searchTerm.toLowerCase())
		);
		// console.log(result);

		setSearchResult(result);
	}, [searchTerm]);

	const loadData = async () => {
		const response = await axios.get("https://restcountries.eu/rest/v2/all");
		setCountries(response.data);
		setIsLoading(false);
	};
	// console.log(countries);

	let loading;
	if (isLoading) {
		loading = (
			<div>
				<i>Loading...</i>
			</div>
		);
	}

	return (
		<div className="container ">
			<div className="input-group mt-4 ">
				<div className="">
					<select className="custom-select 	border shadow" type="button">
						<option value="search" disabled className="dropdown-item">
							Search By
						</option>
						<option value="country" defaultValue className="dropdown-item">
							Country Name
						</option>
						<option value="capital" className="dropdown-item">
							Capital
						</option>
						<option value="region" className="dropdown-item">
							Region Name
						</option>

						<option value="countryCode" className="dropdown-item">
							Alpha 2 Code
						</option>
					</select>
				</div>
				<input
					spellCheck="false"
					type="text"
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
					className="form-control"
					placeholder="Search"
				/>
			</div>
			{/* show loading... if isLoading is still true */}
			{loading}

			<div className="grid-display mt-4">
				{searchTerm
					? searchResult.map((country) => (
							<Country key={country.name} country={country}></Country>
					  ))
					: countries.map((country) => (
							<Country key={country.name} country={country}></Country>
					  ))}
			</div>
		</div>
	);
};

export default AllCountry;
