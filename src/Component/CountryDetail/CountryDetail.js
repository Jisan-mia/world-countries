import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext } from "../../CountriesContext";
import "./CountryDetail.css";

const CountryDetail = () => {
	const { countryName } = useParams();
	const [country, setCountry] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isTranslate, setIsTranslate] = useState(false);

	const { allCountry } = useContext(CountriesContext);

	useEffect( () => {
		try{
			 loadData();
		} catch(err) {
			console.log(err)
		}
	}, []);


	const loadData = async () => {
		const url = `https://restcountries.com/v3.1/name/${countryName}`;
		const response = await axios.get(url);
		setCountry(response.data[0]);
		console.log(response.data[0])
		setIsLoading(false);
	};


	const {
		altSpellings,
		translations,
		cca2,
		cca3,
		ccn3,
		tld,
		languages,
		region,
		subregion,
		capital,
		demonyms,
		area,
		latlng,
	} = country;

	const name = country?.name?.common || '--'
	const official = country?.name?.official || '--'
	const png = country?.flags?.png || ''
	const svg = country?.flags?.svg || ''

	const slicedTranslations = obj => Object.fromEntries(
		Object.entries(obj).slice(0, 10)
	);

	const currencies = typeof country?.currencies == 'object' ? Object.keys(country.currencies)[0] : '--'
	
	const borders = typeof country?.borders == 'object' ? country.borders : ['--']

	
	const commonNative = typeof country?.name?.nativeName == 'object' ? country?.name?.nativeName[Object.keys(country?.name?.nativeName)[0]].common : '--'
	
	const officialNative = typeof country?.name?.nativeName == 'object' ? country?.name?.nativeName[Object.keys(country?.name?.nativeName)[0]].official : '--'

	const iddChecker = (idd) => idd[1]?.length < 2 ? idd.flat().join('') : idd[0]

	const idd = typeof country?.idd == 'object' ? iddChecker(Object.values(country?.idd)) : '--'

	function isObjectEmpty(obj) {
		if(typeof obj !== 'object') return true
		else return Object.keys(obj).length === 0;
	}


	return (
		<div className="container mt-3 country-detail">
			<div className="col-md-12 px-0 pt-4 ">
				<h1>{countryName}</h1>
				<br />
			</div>
			{isLoading ? (
				<i>Loading..</i>
			) : (
				<div className="row">
					<div className="col-md-4">
						<h2 className="mt-3">Names</h2>
						<div className="table-responsive">
							<table className="table table-bordered ">
								<tbody>
									<tr>
										<th>Common </th> <td>{name}</td>
									</tr>
									<tr>
										<th>Official </th> <td>{official || '--'}</td>
									</tr>

									<tr>
										<th>Common (Native)</th> <td>{commonNative}</td>
									</tr>
									<tr>
										<th>Official (Native)</th> <td>{officialNative}</td>
									</tr>

									<tr>
										<th>Alternative Spellings</th>
										<td>
											{altSpellings.length &&
												altSpellings.join(', ')
											}
										</td>
									</tr>
									<tr>
										<th colSpan="2">
											Translations 
											<span
												className="ml-auto text-info pl-4"
												style={{ cursor: "pointer" }}
												onClick={() => {
													setIsTranslate(!isTranslate);
												}}
											>
												{isTranslate ? "Close" : "Show"}
											</span>
										</th>
									</tr>
									{Object.keys(slicedTranslations(translations)).map((item, id) => (
										<tr
											key={id}
											className={isTranslate ? "open" : "transalation"}
										>
											<th>{item}</th>
											<td>{translations[item]?.common}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<h2 className="mt-3">Codes</h2>

						<div className="table-responsive">
							<table className="table table-bordered ">
								<tbody>
									<tr>
										<th>ISO 3166-1 alpha-2 </th> <td>{cca2}</td>
									</tr>
									<tr>
										<th>ISO 3166-1 alpha-3</th> <td>{cca3}</td>
									</tr>
									<tr>
										<th>ISO 3166-1 numeric</th> <td>{ccn3}</td>
									</tr>
									<tr>
										<th>International calling code </th>
										<td>{idd || '--'} </td>
									</tr>
									<tr>
										<th>ISO 4217 currency code </th> <td>{currencies}</td>
									</tr>
									<tr>
										<th>Top level domain</th> <td>{tld.length ? tld.join(', ') : '--'}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* 2nd column */}
					<div className="col-md-4">
						<h2 className="mt-3">Language</h2>
						<div className="table-responsive ">
							<table className="table table-bordered">
								<tbody>
									<tr>
										<th>Native language </th> <td>{!isObjectEmpty(languages) ? Object.values(languages)[0] : '--'}</td>
									</tr>
									<tr>
										<th colSpan="2">Languages</th>
									</tr>

									{!isObjectEmpty(languages) && Object.keys(languages).map((item, index) => (
										<tr key={index}>
											<th>{item}</th> <td>{languages[item]}</td>
										</tr>
									))}

								</tbody>
							</table>
						</div>

						<h2 className="mt-3">Geography</h2>
						<div className="table-responsive">
							<table className="table table-bordered">
								<tbody>
									<tr>
										<th>Region </th> <td>{region || '--'}</td>
									</tr>
									<tr>
										<th>Subregion</th> <td>{subregion || '--'}</td>
									</tr>
									<tr>
										<th>Capital</th> <td>{capital?.length ? capital.join(', ') : '--'}</td>
									</tr>
									<tr>
										<th>Dymonym </th> <td> {!isObjectEmpty(demonyms) ? demonyms[Object.keys(demonyms)[0]]?.f : '--'} </td>
									</tr>
									<tr>
										<th>Lat/Lng</th>
										<td>
											{latlng?.length ?
												latlng.join(', ')
												: '--'
											}
										</td>
									</tr>
									<tr>
										<th>Area</th>
										<td>
											{area}km<sup>2</sup>
										</td>
									</tr>
									<tr>
										<th>Land Borders</th>
										<td>
											{
												borders.join(', ')
											}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* 3rd column */}

					<div className="col-md-4">
						<h2 className="mt-3">Flag</h2>
						<img
							src={svg || png || '--'}
							alt="country flag"
							className="img-fluid img-responsive w-100 mb-3 shadow"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default CountryDetail;
