const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			agenda: [],
			idContact: ""
		},
		actions: {
			loadAgenda: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/riveromj")
					.then(res => res.json())

					.then(data => setStore({ agenda: data }))

					.catch(err => console.log("Err", err));
			},
			deleteContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => console.log("Success:", JSON.stringify(response)))

					.catch(err => console.log(err));
			},

			addContact: (contact, title, id = "", props) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: title == "Update contact" ? "PUT" : "POST", // or ‘POST’
					body: JSON.stringify(contact), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(respose => {
						if (respose.ok) {
							props.history.push("/");
						}
					})
					.catch(err => console.log(err));
			},
			setId: id => {
				const stateId = setStore();
				setStore({ ...stateId, idContact: id });
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
