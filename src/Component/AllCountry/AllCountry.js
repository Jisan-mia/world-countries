import axios from "axios";
import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./AllCountry.css";
const AllCountry = () => {
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		loadData();
	}, []);

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
			<div className="input-group mt-4">
				<div className="">
					<select className="custom-select 	border shadow" type="button">
						<option value="search" disabled className="dropdown-item">
							Search By
						</option>
						<option value="country" selected className="dropdown-item">
							Country Name
						</option>
						<option value="region" className="dropdown-item">
							Region Name
						</option>

						<option value="countryCode" className="dropdown-item">
							Country Code
						</option>
					</select>
				</div>
				<input
					type="text"
					className="form-control "
					placeholder="Not yet developed search opt."
				/>
			</div>
			{/* show loading... if isLoading is still true */}
			{loading}

			<div className="grid-display mt-4">
				{countries.map((country) => (
					<Country key={country.name} country={country}></Country>
				))}
			</div>
		</div>
	);
};

export default AllCountry;
