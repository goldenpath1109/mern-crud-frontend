import { useState, useEffect } from "react";
import axios from "axios";

function TodoCard({ data }) {
	const { _id, title, description } = data;
	return (
		<li key={_id}>
			<div className="title-description">
				<h3>{ title }</h3>
				<p>{ description }</p>
			</div>

			<div className="button-container">
				<button className="button">
					edit
				</button>
				<button className="button">
					delete
				</button>
			</div>
		</li>
	)
}

export function ShowTodoList(){
	const [todo, setTodo] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/todo")
			.then((res) => {
				console.log(res.data);
				setTodo(res.data);
			})
			.catch((err) => {
				console.log(err)
			});
	}, []);

	return (
		<section className="container">
			<section className="contents">
				<h1>TODO</h1>
				<ul className="list-container">
					{
						todo.map((data) => (
							<TodoCard data={data} />
						))
					}
				</ul>
			</section>
		</section>
	);
}