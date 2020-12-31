import React from "react";
import { useHistory } from "react-router-dom";
import "./Country.css";
const Country = (props) => {
	const {
		name,
		nativeName,
		capital,
		region,
		alpha2Code,
		alpha3Code,
		languages,
	} = props.country;

	let langLength = languages.length;

	const history = useHistory();
	const handleMorebtn = (countryName) => {
		const url = `country/${countryName}`;
		history.push(url);
	};

	const countryStyle = {
		margin: "5px",
	};
	return (
		<div className="country border m-2 shadow" style={countryStyle}>
			<div className="panel-heading d-flex justify-content-between align-items-center p-3 text-light bg-info">
				<div className="country-name">
					<p className="panel-title ">{name}</p>
					<br />
					<small>{nativeName}</small>
				</div>

				<div
					onClick={() => handleMorebtn(name)}
					type="btn"
					className="btn btn-secondary text-white btn-sm"
				>
					More
				</div>
			</div>
			<table className="table">
				<tbody>
					<tr>
						<th>Capital</th>
						<td>{capital}</td>
					</tr>
					<tr>
						<th>Region</th>
						<td>{region}</td>
					</tr>
					<tr>
						<th>Alpha 2 Code</th>
						<td>{alpha2Code}</td>
					</tr>
					<tr>
						<th>Alpha 3 Code</th>
						<td>{alpha3Code}</td>
					</tr>
					<tr>
						<th>Languages</th>
						<td>
							{languages.map((lang, index) => (
								<span key={index}>
									{lang.iso639_2} {langLength > 1 ? "," : ""}
								</span>
							))}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Country;
