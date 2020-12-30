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
							style={{ textDecoration: "none", color: "black" }}
							to="/countries"
						>
							<img className="navbar-brand " alt="brand-img" src={logo} />
							<b className="brand-text">World-Countries</b>
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
									className="nav-link "
									href="https://linkedin.com/in/jisan-mia"
								>
									Follow Me
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
