import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import "./Header.css";
const Header = () => {
	const [active, setActive] = useState(false);

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light  ">
				<div className="container">
					<div className="brand d-flex align-items-center">
						<Link
							style={{ textDecoration: "none", color: "black", display: 'flex', alignItems: 'center' }}
							to="/countries"
						>
							<img className="navbar-brand " alt="brand-img" src={logo} />
							<b className="brand-text">World Countries</b>
						</Link>
					</div>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						// aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setActive(!active)}
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className={
							active
								? "collapse open navbar-collapse"
								: "collapse navbar-collapse"
						}
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item ">
								<NavLink
									activeClassName="active-item"
									to="/countries"
									className="nav-link"
									href="#"
								>
									Countries <span className="sr-only">(current)</span>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									activeClassName="active-item"
									to="/about"
									className="nav-link"
									href="#"
								>
									About
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink
									activeClassName="active-item"
									to="/contact"
									className="nav-link "
									href="#"
								>
									Contact
								</NavLink>
							</li>
							<li className="nav-item">
								<a
									target='_blank'
									className="nav-link "
									href="https://github.com/Jisan-mia/world-countries"
								>
									Github
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* <nav class="minimal-nav">
				<div class="container nav-wrapper">
					<a href="#" class="brand">
						<img src={logo} alt="logo" />
						<span>Morse Decoder</span>
					</a>

					<a href="https://github.com/Jisan-mia/morse-trnsltor" class="brand">
						<img src="/github.png" alt="github-logo" />
						<span>Github</span>
					</a>
				</div>
			</nav> */}
		</>
	);
};

export default Header;
