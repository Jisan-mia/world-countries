import React, { useContext, useEffect, useState } from "react";
import { CountriesContext } from "../../CountriesContext";
import Country from "../Country/Country";
import "./AllCountry.css";
const AllCountry = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const { allCountry } = useContext(CountriesContext);
	// console.log(allCountry)

	const capitalGetter = (country) => (country?.capital?.join(' ') || '')	

	useEffect(() => {
		const result = allCountry.filter(
			(country) =>
				country.name?.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
				country?.cca2.toLowerCase().includes(searchTerm.toLowerCase()) ||
				country?.cca3.toLowerCase().includes(searchTerm.toLowerCase()) ||
				country?.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
				capitalGetter(country).toLowerCase().includes(searchTerm.toLowerCase())
		);
		// console.log(result);

		setSearchResult(result);
	}, [searchTerm]);

	// console.log(countries);

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
						<option value="countryCode" className="dropdown-item">
							Alpha 3 Code
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

			<div className="grid-display mt-4">
				{searchTerm
					? searchResult.map((country) => (
							<Country key={country.name.common} country={country}></Country>
					  ))
					: allCountry.length
					? allCountry.map((country) => (
							<Country key={country.name.common} country={country}></Country>
					  ))
					: "Loading.."}
			</div>
		</div>
	);
};

export default AllCountry;
