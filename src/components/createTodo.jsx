import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export function CreateTodo() {
	const [data, setData] = useState({ title: "", description: "" });
	function handleChange(e) {
		setData((data) => ({ ...data, [e.target.name]: e.target.value }));
	}
	function handleSubmit(e) {
		e.preventDefault();
		const todo = {
			title: data.title,
			description: data.description,
		};
		console.log({todo});
		axios
			.post("http://localhost:8000/api/todo", data)
			.then((res) => {
				setData({ title: "", description: "" });
				console.log(res.data.message);
			})
			.catch((err) => {
				console.log("Error couldn't create TODO");
				console.log(err.message);
			})
	}
	return(
		<section className="container">
			<Link to="/" className="button-back">
				<button type="button" className="button">
					back
				</button>
			</Link>
			<section className="contents">
				<form onSubmit={handleSubmit} className="form-container" noValidate>
					<label htmlFor="title" className="label">
						Title
					</label>
					<input type="text" name="title" value={data.title} onChange={handleChange} className="input" />	
					<label htmlFor="description" className="label">
						Description	
					</label>
					<input type="text" name="description" value={data.description} onChange={handleChange} className="input" />		
					<button type="submit" className="button">Create todo</button>		
				</form>
			</section>
		</section>
	)
}
