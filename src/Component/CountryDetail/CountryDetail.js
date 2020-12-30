import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountryDetail.css";

const CountryDetail = () => {
	const { countryName } = useParams();
	const [country, setCountry] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isTranslate, setIsTranslate] = useState(false);
	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
		const response = await axios.get(url);
		console.log(response.data[0]);
		setCountry(response.data[0]);
		setIsLoading(false);
	};

	const {
		name,
		flag,
		nativeName,
		altSpellings,
		translations,
		alpha2Code,
		alpha3Code,
		numericCode,
		callingCodes,
		currencies,
		topLevelDomain,
		languages,
		region,
		subregion,
		capital,
		demonym,
		area,
		borders,
		latlng,
	} = country;

	return (
		<div className="container mt-2 country-detail">
			<div className="col-md-12 px-0 py-3">
				<h1>{countryName}</h1>
				<br />
			</div>
			{isLoading ? (
				<i>Loading..</i>
			) : (
				<div className="row">
					<div className="col-md-4">
						<h2>Names</h2>
						<div className="table-responsive  ">
							<table className="table table-bordered ">
								<tbody>
									<tr>
										<th>Common </th> <td>{name}</td>
									</tr>

									<tr>
										<th>Common (Native)</th> <td>{nativeName}</td>
									</tr>

									<tr>
										<th>Alternative Spellings</th>{" "}
										<td>
											{altSpellings &&
												altSpellings.map((item) => <span> {item}, </span>)}
										</td>
									</tr>
									<tr>
										<th colspan="2">
											Translations{" "}
											<span
												className="ml-auto text-info "
												style={{ cursor: "pointer" }}
												onClick={() => {
													setIsTranslate(!isTranslate);
												}}
											>
												{isTranslate ? "Close" : "See"}
											</span>
										</th>
									</tr>
									{Object.keys(translations).map((item, id) => (
										<tr className={isTranslate ? "open" : "transalation"}>
											<th>{item}</th>
											<td>{translations[item]}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<h2>Codes</h2>

						<div className="table-responsive">
							<table className="table table-bordered  ">
								<tbody>
									<tr>
										<th>ISO 3166-1 alpha-2 </th> <td>{alpha2Code}</td>
									</tr>
									<tr>
										<th>ISO 3166-1 alpha-3</th> <td>{alpha3Code}</td>
									</tr>
									<tr>
										<th>ISO 3166-1 numeric</th> <td>{numericCode}</td>
									</tr>
									<tr>
										<th>International calling code</th>
										<td>{callingCodes} </td>
									</tr>
									<tr>
										<th>Currency code</th> <td>{currencies[0].code}</td>
									</tr>
									<tr>
										<th>Top level domain</th> <td>{topLevelDomain[0]}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* 2nd column */}
					<div className="col-md-4">
						<h2>Language</h2>
						<div className="table-responsive  ">
							<table className="table table-bordered ">
								<tbody>
									<tr>
										<th>Native language </th> <td>{languages[0].name}</td>
									</tr>
									<tr>
										<th colspan="2">Languages</th>
									</tr>

									{languages.map((item, index) => (
										<tr>
											<th>{item.iso639_2}</th> <td>{item.name}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<h2>Geography</h2>
						<div className="table-responsive">
							<table className="table table-bordered">
								<tbody>
									<tr>
										<th>Region </th> <td>{region}</td>
									</tr>
									<tr>
										<th>Subregion</th> <td>{subregion}</td>
									</tr>
									<tr>
										<th>Capital</th> <td>{capital}</td>
									</tr>
									<tr>
										<th>Demonym</th> <td> {demonym} </td>
									</tr>
									<tr>
										<th>Lat/Lng</th>{" "}
										<td>
											{latlng.map((item) => (
												<span> {item} , </span>
											))}
										</td>
									</tr>
									<tr>
										<th>Area</th>
										<td>
											{area}km<sup>2</sup>
										</td>
									</tr>
									<tr>
										<th>Borders</th>
										<td>
											{borders.map((border) => (
												<span>{border} , </span>
											))}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* 3rd column */}

					<div className="col-md-4">
						<h2>Flag</h2>
						<img
							src={flag}
							alt="country flag"
							className="img-fluid img-responsive w-100 mb-3"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default CountryDetail;
