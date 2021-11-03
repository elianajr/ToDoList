import React, { useState, useEffect } from "react";
import Task from "./task.jsx";

const Home = () => {
	const INPUT = document.querySelector("input");
	// const [task, setTask] = useState("");
	// const [item, setItem] = useState("");
	const [list, setList] = useState([]);
	const [toDoList, setToDoList] = useState([]);

	useEffect(() => {
		setToDoList(
			list.map((tasks, index) => {
				return (
					<Task
						label={tasks.label}
						key={index.toString()}
						id={index.toString()}
						delete={handleRemoveItem}
					/>
				);
			})
		);
	}, [list]);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/eliana", {
			method: "GET"
		})
			.then(response => {
				console.log(response);
				if (response.ok) {
					return response.json();
				}
				throw new Error("Fail");
			})
			.then(responseAsJSON => {
				setList(responseAsJSON);
				console.log(responseAsJSON);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/eliana", {
			method: "PUT",
			body: JSON.stringify(list),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				console.log(response);
				if (response.ok) {
					return response.json();
				}
				throw new Error("Failing updating list");
			})
			.then(responseAsJSON => {
				console.log(responseAsJSON);
			})
			.catch(error => {
				console.log(error);
			});
	}, [list]);

	const handleRemoveItem = indexList => {
		setList(list.filter((_, index) => index != indexList));
	};

	return (
		<div className="myList">
			<h2>To Do List</h2>
			<form
				onSubmit={event => {
					event.preventDefault();
					setList([...list, { label: INPUT.value, done: false }]);
				}}>
				<input type="text" placeholder="Things to be done" />
			</form>
			<ul>{toDoList}</ul>
		</div>
	);
};

export default Home;
