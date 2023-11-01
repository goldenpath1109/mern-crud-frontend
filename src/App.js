import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./App.css";

function App() {
	return (
		<div className="app-contents">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" Component={ShowTodoList} />
					<Route path="/create-todo" Component={CreateTodo} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
