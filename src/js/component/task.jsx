import React from "react";
import PropTypes from "prop-types";

const Task = props => {
	const done = props.task.done ? "text-decoration-line-through" : "";

	return (
		<li className={done}>
			{props.task.label}
			<span>
				<button>
					<i
						className="far fa-trash-alt"
						onClick={() => props.delete(props.id)}></i>
				</button>
				<button>
					<i
						className="far fa-check-square"
						onClick={() => props.cross(props.task.label)}></i>
				</button>
			</span>
		</li>
	);
};

Task.propTypes = {
	label: PropTypes.string,
	delete: PropTypes.func,
	id: PropTypes.string,
	cross: PropTypes.func,
	task: PropTypes.object
};

export default Task;
