import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AddContact = props => {
	const { actions } = useContext(Context);
	const contact = props.location.state.contact;
	const title = props.location.state.title;
	const [user, setUser] = useState({
		address: title == "Update contact" ? contact.address : "",
		agenda_slug: "riveromj",
		email: title == "Update contact" ? contact.email : "",
		full_name: title == "Update contact" ? contact.full_name : "",
		phone: title == "Update contact" ? contact.phone : ""
	});

	const handelChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	const handelSubmit = event => {
		event.preventDefault();
		const id = title == "Update contact" ? contact.id : "";
		actions.addContact(user, title, id, props);
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{title}</h1>
				<form onChange={handelChange} onSubmit={handelSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							defaultValue={title == "Update contact" ? contact.full_name : ""}
							placeholder="Full Name"
							name="full_name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							defaultValue={title == "Update contact" ? contact.email : ""}
							placeholder="Enter email"
							name="email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							defaultValue={title == "Update contact" ? contact.phone : ""}
							placeholder="Enter phone"
							name="phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							defaultValue={title == "Update contact" ? contact.address : ""}
							placeholder="Enter address"
							name="address"
						/>
					</div>

					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
				</form>
			</div>
		</div>
	);
};
AddContact.propTypes = {
	location: PropTypes.object
};
