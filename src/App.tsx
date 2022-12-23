import { useState } from "react";
import { add, remove } from "./features/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";

function App() {
	const todos = useAppSelector((state) => state.todos);
	const [title, setTitle] = useState("");
	const dispatch = useAppDispatch();

	const onSave = () => {
		dispatch(add(title));
		setTitle("");
	};
	const onDelete = (id: string) => {
		dispatch(remove(id));
	};

	return (
		<div className="App">
			<h1>Todo list</h1>
			<input
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				type="text"
			/>
			<button onClick={onSave}>Save</button>
			<ul>
				{todos.map((todo: any, i: number) => (
					<li>
						{todo.title}
						<button onClick={() => onDelete(todo.id)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
