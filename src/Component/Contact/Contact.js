import React from "react";
import "./Contact.css";
const Contact = () => {
	return (
		<div className="container d-flex justify-content-center py-4">
			<div className="jumbotron text-black w-50 mobileDesign ">
				<div className="py-1">
					<form className="row g-3 needs-validation">
						<div className="col-md-6 py-2">
							<label className="form-label">First name</label>
							<input
								type="text"
								className="form-control"
								id="validationCustom01"
								placeholder="First Name"
								required
							/>
							<div className="valid-feedback">Looks good!</div>
						</div>
						<div className="col-md-6 py-2">
							<label className="form-label">Last name</label>
							<input
								type="text"
								className="form-control"
								id="validationCustom02"
								placeholder="Last Name"
								required
							/>
							<div className="valid-feedback">Looks good!</div>
						</div>

						<div className="col-md-12 py-2">
							<label className="form-label">Email address</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								required
							/>
						</div>
						<div className="col-md-12 py-2">
							<label className="form-label">Meassage</label>
							<textarea
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								required
							/>
						</div>

						<div className="col-12 py-4">
							<button className="btn btn-primary" type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
