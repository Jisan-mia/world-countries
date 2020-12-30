import React from "react";

const Contact = () => {
	return (
		<div className="container py-2">
			<div className="jumbotron bg-dark text-white shadow">
				<div className="py-1">
					<form className="row g-3 needs-validation" novalidate>
						<div className="col-md-6 py-2">
							<label for="validationCustom01" className="form-label">
								First name
							</label>
							<input
								type="text"
								className="form-control"
								id="validationCustom01"
								value="Mark"
								required
							/>
							<div className="valid-feedback">Looks good!</div>
						</div>
						<div className="col-md-6 py-2">
							<label for="validationCustom02" className="form-label">
								Last name
							</label>
							<input
								type="text"
								className="form-control"
								id="validationCustom02"
								value="Otto"
								required
							/>
							<div className="valid-feedback">Looks good!</div>
						</div>

						<div class="col-md-12 py-2">
							<label for="exampleInputEmail1" class="form-label">
								Email address
							</label>
							<input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								required
							/>
						</div>
						<div class="col-md-12 py-2">
							<label for="exampleInputEmail1" class="form-label">
								Meassage
							</label>
							<textarea
								type="email"
								class="form-control"
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
