import React from "react";
import { useHistory } from "react-router-dom";
import "./Country.css";
const Country = (props) => {
	const {
		name: {common: name },
		capital,
		region,
		cca2,
		cca3,
	} = props.country;

	const iddChecker = (idd) => idd[1]?.length < 2 ? idd.flat().join('') : idd[0]

	const idd = typeof props.country?.idd == 'object' ? iddChecker(Object.values(props.country?.idd)) : '--'
	console.log(Object.values(props.country?.idd))
	console.log(idd)


	const nativeName = typeof props.country?.name?.nativeName == 'object' ? props.country?.name?.nativeName[Object.keys(props.country?.name?.nativeName)[0]].common : props.country?.name?.official || undefined

	const languages = typeof props.country?.languages == 'object' ? Object.keys(props.country.languages).join(', ') : undefined

	const history = useHistory();
	const handleMorebtn = (countryName) => {
		const url = `countries/${countryName}`;
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
						<td>{cca2}</td>
					</tr>
					<tr>
						<th>Alpha 3 Code</th>
						<td>{cca3}</td>
					</tr>

					<tr>
						<th>Int. dial coee</th>
						<td>{cca3}</td>
					</tr>
					
					<tr>
						<th>Languages</th>
						<td>
							{languages}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Country;
