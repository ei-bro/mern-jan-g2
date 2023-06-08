import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function EditTask() {
	const { id } = useParams();
	const inputDom = useRef(null);
	const chceckBoxDom = useRef(null);

	const [task, setTask] = useState([]);
	useEffect(() => {
		fetchTask();
	}, []);

	// fetch all task
	async function fetchTask() {
		try {
			const { data } = await axios(`http://localhost:5000/task/${id}`);
			setTask(data.result);
			if (task.length > 0) {
				inputDom.current.value = task[0].task_name;
				chceckBoxDom.current.checked = task[0].completed;
			}
		} catch (error) {
			console.log(error.message);
		}
	}

	// edit functionality

	return (
		<>
			<div className="container">
				<form className="single-task-form">
					<h4>Edit Task</h4>
					<div className="form-control">
						<label>Task ID</label>
						<p className="task-edit-id"></p>
					</div>
					<div className="form-control">
						<label htmlFor="name">Name</label>
						<input
							ref={inputDom}
							type="text"
							name="name"
							className="task-edit-name"
						/>
					</div>
					<div className="form-control">
						<label htmlFor="completed">completed</label>
						<input
							ref={chceckBoxDom}
							type="checkbox"
							name="completed"
							className="task-edit-completed"
						/>
					</div>
					<button type="submit" className="block btn task-edit-btn">
						edit
					</button>
					<div className="form-alert"></div>
				</form>
				<Link to="/" className="btn back-link">
					back to tasks
				</Link>
			</div>
		</>
	);
}

export default EditTask;
